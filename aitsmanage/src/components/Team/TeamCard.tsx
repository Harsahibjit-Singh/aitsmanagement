import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

interface Team {
  id: number;
  name: string;
  description: string;
}

interface TeamCardProps {
  team: Team;
  onDelete: () => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ team, onDelete }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const formattedTeamName = team.name.toLowerCase().replace(/\s+/g, "");
    // Store current team data before navigation
    localStorage.setItem("currentTeam", JSON.stringify(team));
    navigate(`/team/${formattedTeamName}`);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-cyan-400/50 transition-all duration-500 ease-in-out border border-gray-700 overflow-hidden group relative"
    >
      <button
        onClick={handleDelete}
        className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 rounded-full p-2 transition-all duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
      >
        <FaTrash />
      </button>
      <h3 className="text-2xl font-semibold text-center transition duration-300 group-hover:text-cyan-400">
        {team.name}
      </h3>
      <p className="text-sm text-gray-400 mt-2 text-center px-4">{team.description}</p>
      <div className="mt-4 space-y-1 text-center">
        <a
          href={`mailto:${team.name.toLowerCase().replace(/\s+/g, "")}@example.com`} 
          className="text-xs text-cyan-300 hover:text-cyan-400 transition duration-300"
        >
          {team.name.toLowerCase().replace(/\s+/g, "")}@example.com
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
