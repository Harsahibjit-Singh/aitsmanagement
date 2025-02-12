import { motion } from "framer-motion";

const teams = [
  {
    name: "Event Management",
    link: "https://drive.google.com/link1",
    email: "event@team.com",
    phone: "+1234567890",
    description: "Handles all event planning and execution."
  },
  {
    name: "Website Management",
    link: "",
    email: "website@team.com",
    phone: "",
    description: "Manages the website and online presence."
  },
  {
    name: "Industrial Coordination",
    link: "",
    email: "",
    phone: "",
    description: "Facilitates collaboration between industry and event organizers."
  },
  {
    name: "Internal Coordination",
    link: "",
    email: "",
    phone: "",
    description: "Ensures smooth communication and workflow within teams."
  },
  {
    name: "Branding",
    link: "",
    email: "",
    phone: "",
    description: "Handles all branding and promotional material design."
  },
  {
    name: "Documentation",
    link: "",
    email: "",
    phone: "",
    description: "Responsible for maintaining records and official documents."
  },
  {
    name: "Support",
    link: "",
    email: "",
    phone: "",
    description: "Provides assistance to teams and participants."
  },
  {
    name: "Stall Management",
    link: "",
    email: "",
    phone: "",
    description: "Manages the stalls and exhibitor arrangements."
  },
  {
    name: "Hospitality",
    link: "",
    email: "",
    phone: "",
    description: "Ensures a comfortable experience for guests and participants."
  },
  {
    name: "Travel & Logistics",
    link: "",
    email: "",
    phone: "",
    description: "Handles travel arrangements and logistical support."
  },
  {
    name: "Branding Management",
    link: "",
    email: "",
    phone: "",
    description: "Manages branding strategies and execution."
  },
  {
    name: "Technical Management",
    link: "",
    email: "",
    phone: "",
    description: "Oversees technical aspects of the event."
  },
  {
    name: "Social Media",
    link: "",
    email: "",
    phone: "",
    description: "Handles all social media promotions and engagement."
  },
  {
    name: "Registration & Accommodation",
    link: "",
    email: "",
    phone: "",
    description: "Manages participant registrations and stay arrangements."
  },
  {
    name: "Promotion",
    link: "",
    email: "",
    phone: "",
    description: "Oversees marketing and promotional campaigns."
  },
  {
    name: "Videos",
    link: "",
    email: "",
    phone: "",
    description: "Creates and edits video content for the event."
  },
  {
    name: "Photography",
    link: "",
    email: "",
    phone: "",
    description: "Captures key moments through photography."
  },
  {
    name: "Felicitation",
    link: "",
    email: "",
    phone: "",
    description: "Handles award ceremonies and recognitions."
  },
  {
    name: "Venue Management",
    link: "",
    email: "",
    phone: "",
    description: "Ensures proper venue setup and arrangements."
  },
  {
    name: "Cultural",
    link: "",
    email: "",
    phone: "",
    description: "Manages cultural activities and performances."
  },
  {
    name: "Sponsorship",
    link: "",
    email: "",
    phone: "",
    description: "Secures sponsorships and partnerships for the event."
  },
  {
    name: "Campus Ambassadors",
    link: "",
    email: "",
    phone: "",
    description: "Engages student ambassadors to promote the event."
  }
];

const Data = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
    <h1 className="text-5xl font-extrabold text-center mb-8 tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-[1.8]">
      Data Management
    </h1>


      <p className="text-lg text-gray-300 mb-20 text-center"> Click on the card to get to drive link of the data.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {teams.map((team, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-cyan-400/50 transition-all duration-500 ease-in-out border border-gray-700 overflow-hidden group"
            onClick={() => window.open(team.link, "_blank")}
          >
            <h2 className="text-2xl font-bold text-center transition duration-300 group-hover:text-cyan-400">
              {team.name}
            </h2>
            <p className="text-sm text-gray-400 mt-2 text-center px-4">
              {team.description}
            </p>
            <div className="mt-4 space-y-1 text-center">
              <a
                href={`mailto:${team.email}`}
                className="text-xs text-cyan-300 hover:text-cyan-400 transition duration-300"
              >
                {team.email}
              </a>
              <br />
              <a
                href={`tel:${team.phone}`}
                className="text-xs text-purple-300 hover:text-purple-400 transition duration-300"
              >
                {team.phone}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Data;
