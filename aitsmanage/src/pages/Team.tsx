import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import TeamCard from "../components/Team/TeamCard";
import { FaPlus } from "react-icons/fa";

const ADMIN_PASSWORD = "atm#management#324";

// Define types for the team
interface Team {
  id: number;
  name: string;
  description: string;
  lin: string;
  drivelink: string;
  Mail: string;
}

const TeamPage = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const [deletePassword, setDeletePassword] = useState<string>("");
  const [deleteError, setDeleteError] = useState<string>("");
  const [teamToDelete, setTeamToDelete] = useState<number | null>(null);

  // Load teams from localStorage on component mount
  useEffect(() => {
    const savedTeams = JSON.parse(localStorage.getItem("teams") || "[]");
    setTeams(savedTeams);
  }, []);

  // Function to add a new team
  const handleAddTeam = (newTeam: Team) => {
    const updatedTeams = [...teams, newTeam];
    localStorage.setItem("teams", JSON.stringify(updatedTeams));
    setTeams(updatedTeams);
    setShowAddForm(false);
  };

  // Function to initiate delete confirmation
  const handleDeleteTeam = (teamId: number) => {
    setTeamToDelete(teamId);
    setShowDeleteConfirm(true);
  };

  // Function to confirm team deletion
  const confirmDelete = () => {
    if (deletePassword === ADMIN_PASSWORD) {
      const updatedTeams = teams.filter((team) => team.id !== teamToDelete);
      localStorage.setItem("teams", JSON.stringify(updatedTeams));
      setTeams(updatedTeams);
      setShowDeleteConfirm(false);
      setDeletePassword("");
      setDeleteError("");
    } else {
      setDeleteError("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-8 tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Our Teams
        </h1>
        <div className="flex justify-end items-center mb-10">
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-900 flex items-center gap-2"
          >
            <FaPlus /> Add Team
          </button>
        </div>

        {teams.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <p className="text-xl">No teams added yet.</p>
            <p className="mt-2">Click the Add Team button to create a new team.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teams.map((team) => (
              <TeamCard key={team.id} team={team} onDelete={() => handleDeleteTeam(team.id)} />
            ))}
          </div>
        )}

        {/* Add Team Form */}
        {showAddForm && <AddTeamForm onSubmit={handleAddTeam} onClose={() => setShowAddForm(false)} />}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-black p-6 rounded-lg w-96">
              <h2 className="text-xl font-bold mb-4 text-center text-cyan-500">Confirm Delete</h2>
              <input
                type="password"
                placeholder="Enter Admin Password"
                value={deletePassword}
                onChange={(e) => setDeletePassword(e.target.value)}
                className="w-full p-2 border rounded mb-4 text-black"
              />
              {deleteError && <p className="text-red-500 text-sm mb-4">{deleteError}</p>}
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
                <button onClick={confirmDelete} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Separate AddTeamForm Component
interface AddTeamFormProps {
  onSubmit: (team: Team) => void;
  onClose: () => void;
}

const AddTeamForm: React.FC<AddTeamFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    lin: "",
    drivelink: "",
    Mail: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.password === ADMIN_PASSWORD) {
      const { password, ...submitData } = formData;
      const cleanLink = submitData.lin.replace(/^\/+|\/+$/g, ""); // Remove extra slashes
      const newTeam = { id: Date.now(), ...submitData, lin: cleanLink };
      onSubmit(newTeam);
      onClose();
    } else {
      setError("Incorrect password");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-black p-8 rounded-lg w-96 border border-gray-800 shadow-lg shadow-cyan-400/50 hover:shadow-cyan-800/50">
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">Add New Team</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" name="name" placeholder="Team Name" onChange={handleChange} className="w-full p-4 bg-gray-900 text-white border border-cyan-500 rounded" required />
          <textarea name="description" placeholder="Team Description" onChange={handleChange} className="w-full p-4 bg-gray-900 text-white border border-cyan-500 rounded" required />
          <input type="text" name="Mail" placeholder="Enter Team Mail" onChange={handleChange} className="w-full p-4 bg-gray-900 text-white border border-cyan-500 rounded" required />
          <input type="text" name="drivelink" placeholder="Enter Team DriveLink" onChange={handleChange} className="w-full p-4 bg-gray-900 text-white border border-cyan-500 rounded" required />
          <input type="password" name="password" placeholder="Enter Admin Password" onChange={handleChange} className="w-full p-4 bg-gray-900 text-white border border-cyan-500 rounded" required />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-6 py-2 bg-gray-800 text-white rounded-lg">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-cyan-500 text-white rounded-lg">Add Team</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamPage;
