import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import HeaderCard from "./HeaderCard";
import ContactCard from "./ContactCard";
import AddContactForm from "./AddContactForm";
import { FaTrash } from "react-icons/fa"; // Make sure to install react-icons
import { FaEnvelope } from "react-icons/fa";
import { SiGoogledrive } from "react-icons/si";
import { FaPlus } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';

const ADMIN_PASSWORD = "atm#management#324";

const customTooltipStyle = {
	background: "linear-gradient(135deg, #FF1744, #D50000)",
	color: "#fff",
	padding: "12px 16px",
	borderRadius: "50px",
	boxShadow: "0px 0px 12px rgba(255, 23, 68, 0.7)",
	fontWeight: "bold",
	transform: "scale(1.05)",
};

interface Contact {
	id: number;
	name: string;
	email: string;
	phone: string;
	role: string;
	linkedin: string;
	photoUrl: string;
}

interface TeamMemberData {
	leader: Contact | null;
	contacts: Contact[];
}

const DynamicTeamPage: React.FC = () => {
	const { teamName } = useParams<{ teamName: string }>();
	const [teamData, setTeamData] = useState<{ name: string } | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [teamLead, setTeamLead] = useState<Contact | null>(null);
	const [contacts, setContacts] = useState<Contact[]>([]);
	const [showContactForm, setShowContactForm] = useState<boolean>(false);
	const [showLeaderForm, setShowLeaderForm] = useState<boolean>(false);
	const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
	const [deletePassword, setDeletePassword] = useState<string>("");
	const [deleteError, setDeleteError] = useState<string>("");
	const [deleteTarget, setDeleteTarget] = useState<{
		type: "leader" | "member" | null;
		index: number | null;
	}>({
		type: null,
		index: null,
	});

	useEffect(() => {
		try {
			const currentTeam = JSON.parse(localStorage.getItem("currentTeam") || "null");

			if (
				currentTeam &&
				currentTeam.name.toLowerCase().replace(/\s+/g, "") === teamName
			) {
				setTeamData(currentTeam);
				const storageKey = `team_${teamName}_members`;
				const teamMembers: TeamMemberData = JSON.parse(
					localStorage.getItem(storageKey) ||
						'{"contacts":[], "leader":null}'
				);
				setTeamLead(teamMembers.leader);
				setContacts(teamMembers.contacts);
			} else {
				const teams = JSON.parse(localStorage.getItem("teams") || "[]");
				const foundTeam = teams.find(
					(team: { name: string }) =>
						team.name.toLowerCase().replace(/\s+/g, "") === teamName
				);
				if (foundTeam) {
					setTeamData(foundTeam);
				}
			}
		} catch (error) {
			console.error("Error loading team data:", error);
		} finally {
			setLoading(false);
		}
	}, [teamName]);

	const handleDelete = (type: "leader" | "member", index: number | null = null) => {
		setDeleteTarget({ type, index });
		setShowDeleteConfirm(true);
		setDeletePassword("");
		setDeleteError("");
	};

	const confirmDelete = () => {
		if (deletePassword !== ADMIN_PASSWORD) {
			setDeleteError("Incorrect password");
			return;
		}

		const storageKey = `team_${teamName}_members`;

		if (deleteTarget.type === "leader") {
			setTeamLead(null);
			localStorage.setItem(
				storageKey,
				JSON.stringify({
					leader: null,
					contacts: contacts,
				})
			);
		} else if (deleteTarget.type === "member") {
			const updatedContacts = contacts.filter(
				(_, i) => i !== deleteTarget.index
			);
			setContacts(updatedContacts);
			localStorage.setItem(
				storageKey,
				JSON.stringify({
					leader: teamLead,
					contacts: updatedContacts,
				})
			);
		}

		setShowDeleteConfirm(false);
		setDeletePassword("");
		setDeleteError("");
	};

	const handleAddContact = (newContact: Omit<Contact, 'id'>) => {
		const updatedContacts = [
			...contacts,
			{ ...newContact, id: Date.now() },
		];
		setContacts(updatedContacts);
		const storageKey = `team_${teamName}_members`;
		localStorage.setItem(
			storageKey,
			JSON.stringify({
				leader: teamLead,
				contacts: updatedContacts,
			})
		);
		setShowContactForm(false);
	};

	const handleAddTeamLead = (newLeader: Omit<Contact, "id">) => {
		const leaderData: Contact = { ...newLeader, id: Date.now() };
		setTeamLead(leaderData);
		const storageKey = `team_${teamName}_members`;
		localStorage.setItem(
			storageKey,
			JSON.stringify({
				leader: leaderData,
				contacts: contacts,
			})
		);
		setShowLeaderForm(false);
	};
	

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center text-cyan-500 animate__animated animate__fadeIn animate__delay-1s">
				Loading...
			</div>
		);
	}

	if (!teamData) {
		return <Navigate to="/" replace />;
	}

	return (
		<div className="min-h-screen bg-black text-white pb-20 animate__animated animate__fadeIn animate__delay-0.5s">
			    <h1 className="text-5xl mt-8  font-extrabold text-center mb-16 tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-[1.8]">
				{teamData.name}
    </h1>

			{teamLead && (
				<div className="relative animate__animated animate__fadeIn animate__delay-1.5s mb-5 flex flex-col items-center">
				<HeaderCard
					id={teamLead.id}
					name={teamLead.name}
					email={teamLead.email}
					phone={teamLead.phone}
					linkedin={teamLead.linkedin}
					photoUrl={teamLead.photoUrl}
				/>
				

			</div>
			
			)}
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{contacts.map((contact, index) => (
						<div
							key={contact.id || index}
							className="relative animate__animated animate__fadeIn animate__delay-2s"
						>
							<ContactCard contact={contact} />
							<button
								onClick={() => handleDelete("member", index)}
								className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
							>
								<FaTrash />
							</button>
						</div>
					))}
				</div>
			</div>

			<footer className="fixed bottom-0 w-full bg-black shadow-lg p-1 flex justify-center space-x-4 animate__animated animate__fadeIn animate__delay-2.5s">
    {/* Google Drive Link */}
    <a 
	    data-tooltip-id="drive-tooltip"
        href={teamData.drivelink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 rounded-full tooltip transition-transform hover:scale-110 shadow-lg flex items-center justify-center" data-tip="Link to Google Drive"
    >
        <SiGoogledrive 
            size={30} 
            style={{ color: "#00C853", filter: "drop-shadow(0px 0px 6px #00C853)" }} 
        />
    </a>

    {/* Mail Link */}
    <a 
	   data-tooltip-id="Mail-tooltip"
        href={`mailto:${teamData.Mail}`} 
        className="p-3 rounded-full  transition-transform hover:scale-110 shadow-lg flex items-center justify-center"
    >
        <FaEnvelope 
            size={30} 
            style={{ color: "rgb(90, 122, 216)", filter: "drop-shadow(0px 0px 6pxrgb(90, 122, 216))" }} 
        />
    </a>

    {/* Add Member Button */}
    <button
	data-tooltip-id="add-member-tooltip"
        onClick={() => setShowContactForm(true)}
        className="p-3 rounded-full tooltip transition-transform hover:scale-110 shadow-lg flex items-center justify-center" 
        style={{ filter: "drop-shadow(0px 0px 6px #00E5FF)" }}
    >
        <FaPlus size={30} style={{ color: "cyan" }} />
    </button>


    {/* Add Team Leader Button (if no leader exists) */}
    {!teamLead && (
        <button
		  data-tooltip-id="add-teamLeader-tooltip"
            onClick={() => setShowLeaderForm(true)}
            className="p-3 rounded-full transition-transform hover:scale-110 shadow-lg flex items-center justify-center"
            style={{ filter: "drop-shadow(0px 0px 6px #FFD600)" }}
        >
            <FaPlus size={30} style={{ color: "yellow" }} />
        </button>
    )}

    {/* Delete Leader Button */}
    {teamLead && (
        <button
		    data-tooltip-id="Delete-teamLeader-tooltip"
            onClick={() => handleDelete("leader")}
            className="p-3 rounded-full  transition-transform hover:scale-110 shadow-lg flex items-center justify-center"
            style={{ filter: "drop-shadow(0px 0px 6pxrgb(255, 255, 255))" }}
        >
            <FaTrash size={25} style={{ color: "red" }} />
        </button>
    )}


<Tooltip
	id="drive-tooltip"
	place="top"
	effect="solid"
	style={{
		background: "linear-gradient(45deg, #00C853, #00E676)",
		color: "#fff",
		padding: "12px 16px",
		borderRadius: "8px",
		boxShadow: "0px 0px 12px rgba(0, 200, 83, 0.7)",
		fontWeight: "bold",
		transition: "transform 0.2s ease-in-out",
	}}
>
	Google Drive Link
</Tooltip>
<Tooltip
	id="Mail-tooltip"
	place="top"
	effect="solid"
	style={{
		background: "linear-gradient(45deg, #FF3D00, #FF6D00)",
		color: "#fff",
		padding: "12px 16px",
		borderRadius: "8px",
		boxShadow: "0px 0px 12px rgba(255, 61, 0, 0.7)",
		fontWeight: "bold",
		transform: "rotate(-2deg)",
	}}
>
	Email team at '{teamData.Mail}'
</Tooltip>
<Tooltip
	id="add-member-tooltip"
	place="top"
	effect="solid"
	style={{
		background: "radial-gradient(circle, #00E5FF, #00B8D4)",
		color: "#000",
		padding: "12px 16px",
		borderRadius: "10px",
		boxShadow: "0px 0px 15px rgba(0, 229, 255, 0.7)",
		fontWeight: "bold",
		opacity: 0.95,
	}}
>
	Add New Member
</Tooltip>
<Tooltip
	id="add-teamLeader-tooltip"
	place="top"
	effect="solid"
	style={{
		background: "linear-gradient(90deg, #FFD700, #FFEB3B)",
		color: "#000",
		padding: "12px 16px",
		borderRadius: "6px",
		boxShadow: "0px 0px 12px rgba(255, 215, 0, 0.7)",
		fontWeight: "bold",
		letterSpacing: "1px",
	}}
>
	Add Team Leader
</Tooltip>
<Tooltip
	id="Delete-teamLeader-tooltip"
	place="top"
	effect="solid"
	style={{
		background: "linear-gradient(135deg, #FF1744, #D50000)",
		color: "#fff",
		padding: "12px 16px",
		borderRadius: "50px",
		boxShadow: "0px 0px 12px rgba(255, 23, 68, 0.7)",
		fontWeight: "bold",
		transform: "scale(1.05)",
	}}
>
	Delete Team Leader
</Tooltip>

</footer>



			{showContactForm && (
				<AddContactForm
					onSubmit={handleAddContact}
					onClose={() => setShowContactForm(false)}
					isLeader={false}
				/>
			)}

			{showLeaderForm && (
				<AddContactForm
					onSubmit={handleAddTeamLead}
					onClose={() => setShowLeaderForm(false)}
					isLeader={true}
				/>
			)}

			{showDeleteConfirm && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate__animated animate__fadeIn animate__delay-3s">
					<div className="bg-black p-6 rounded-lg w-96">
						<h2 className="text-xl font-bold mb-4 text-center text-cyan-500">
							Confirm Delete
						</h2>
						<input
							type="password"
							placeholder="Enter Admin Password"
							value={deletePassword}
							onChange={(e) => setDeletePassword(e.target.value)}
							className="w-full p-2 border rounded mb-4 text-black"
						/>
						{deleteError && (
							<p className="text-red-500 text-sm mb-4">
								{deleteError}
							</p>
						)}
						<div className="flex justify-end space-x-2">
							<button
								onClick={() => {
									setShowDeleteConfirm(false);
									setDeletePassword("");
									setDeleteError("");
								}}
								className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
							>
								Cancel
							</button>
							<button
								onClick={confirmDelete}
								className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DynamicTeamPage;
