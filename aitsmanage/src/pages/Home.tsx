import { useEffect } from "react";
import { motion } from "framer-motion";
import Countdown from "../components/countdown";
import Sponsors from "../components/homepagecomponents/sponsors";
import JoinOurTeam from "../components/homepagecomponents/volunteer";
import { li, link } from "framer-motion/client";

const teamMembers = [
  {
    rank: "Faculty Event Lead",
    name: "Dr. Sugandha Sharma",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQGwWNcmsRKXgA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1660482948185?e=1744243200&v=beta&t=0nR539QB72F6XWpQPSKYCL_Zt-WotlDUOsSaQ_luWmo",
    linkedin: "https://www.linkedin.com/in/dr-sugandha-sharma-8a4090b7",
    role: "Ensuring smooth operations and logistics",
  },
  {
    rank: "Faculty Co-Convenor",
    name: "Dr. Ruchika Gupta",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFPlKk89_L6ZA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709821630950?e=1744243200&v=beta&t=lWWZygZodARN9F3v_ORkfX1abc-NvorMlqSTmHaZbpE",
    linkedin: "https://www.linkedin.com/in/ruchika-gupta-55bbb764",
    role: "Providing guidance and institutional support",
  },
  {
    rank: "Event Chair",
    name: "Nitesh K Aggarwal",
    image: "src/assets/images/nitesh.png",
    linkedin: "https://www.linkedin.com/in/nitesh-k-aggarwal",
    role: "Leading the event with vision and strategy",
  },
  {
    rank: "Event Vice Chair",
    name: "Akshat Srivastava",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHA1W8s48Sj0A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715250497233?e=1744243200&v=beta&t=kjba0EELdiymeUNDPCAwcwqj1C4O22wBwbR5bf2pSMk",
    linkedin: "https://www.linkedin.com/in/akshat-srivastava-",
    role: "Assisting in event execution & coordination",
  },



  // {
  //   rank: "CU Authority Head",
  //   name: "Dr. Sachin Ahuja",
  //   image: "https://media.licdn.com/dms/image/v2/C4D03AQGwWNcmsRKXgA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1660482948185?e=1744243200&v=beta&t=0nR539QB72F6XWpQPSKYCL_Zt-WotlDUOsSaQ_luWmo",
  //   linkedin: "https://www.linkedin.com/in/dr-sugandha-sharma-8a4090b7",
  //   role: "Ensuring smooth operations and logistics",
  // },
  // {
  //   rank: "PVC AA Co-Convenor",
  //   name: "Dr. Ruchika Gupta",
  //   image: "https://media.licdn.com/dms/image/v2/D5603AQFPlKk89_L6ZA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709821630950?e=1744243200&v=beta&t=lWWZygZodARN9F3v_ORkfX1abc-NvorMlqSTmHaZbpE",
  //   linkedin: "https://www.linkedin.com/in/ruchika-gupta-55bbb764",
  //   role: "Providing guidance and institutional support",
  // },
  // {
  //   rank: "Faculty Event Lead",
  //   name: "Dr. Sugandha Sharma",
  //   image: "https://media.licdn.com/dms/image/v2/C4D03AQGwWNcmsRKXgA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1660482948185?e=1744243200&v=beta&t=0nR539QB72F6XWpQPSKYCL_Zt-WotlDUOsSaQ_luWmo",
  //   linkedin: "https://www.linkedin.com/in/dr-sugandha-sharma-8a4090b7",
  //   role: "Ensuring smooth operations and logistics",
  // },
  // {
  //   rank: "Faculty Co-Convenor",
  //   name: "Dr. Ruchika Gupta",
  //   image: "https://media.licdn.com/dms/image/v2/D5603AQFPlKk89_L6ZA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709821630950?e=1744243200&v=beta&t=lWWZygZodARN9F3v_ORkfX1abc-NvorMlqSTmHaZbpE",
  //   linkedin: "https://www.linkedin.com/in/ruchika-gupta-55bbb764",
  //   role: "Providing guidance and institutional support",
  // },
];

const Home = () => {
  useEffect(() => {
    const title = document.getElementById("title");
    if (title) {
      title.style.opacity = "0";
      title.style.transform = "translateY(-50px)";
      setTimeout(() => {
        title.style.transition = "opacity 1.2s ease-out, transform 1.2s ease-out";
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
      }, 500);
    }
  }, []);

  return (
    <div>
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute w-full h-full object-cover opacity-30">
        <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>

      {/* Title Section */}
      <div className="relative z-10 text-white">
        <h1
          id="title"
          className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mt-16"
          style={{ paddingTop: "150px", paddingBottom: "100px" }}
        >
          All India Technology Summit 2025
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Empowering the Future of Technology, Innovation & Research
          <br />
          <span className="text-blue-400">Powered by IEEE Chandigarh University Student Branch</span>
        </p>
        <a
          href="/team"
          className="mt-6 mb-16 inline-block bg-gradient-to-r from-cyan-500 to-blue-700 px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
        >
          Click for Team Details
        </a>
      </div>

{/* Event Committee Section */}
<div className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 mb-28">
  {teamMembers.map((member, index) => (
    <motion.a
      key={index}
      href={member.linkedin} // Link to LinkedIn profile
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-72 h-96 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border-2 border-cyan-400 hover:shadow-cyan-500/50 transition-all duration-300"
    >
      {/* Image with smooth scale effect */}
      <motion.img
        src={member.image}
        alt={member.rank}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 ease-in-out"
        whileHover={{ scale: 1.15 }} // Image scales up, but card remains same
      />

      {/* Animated Info Section */}
      <motion.div
        className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-60 text-white transition-all duration-300"
        whileHover={{ y: -5 }}
      >
        {/* Animated Rank */}
        <motion.h3
          className="text-xl font-bold transition-all duration-300 group-hover:text-cyan-300 group-hover:scale-105"
        >
          {member.rank}
        </motion.h3>

        {/* Animated Name */}
        <motion.h2
          className="text-2xl font-bold transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110"
        >
          {member.name}
        </motion.h2>

        {/* Animated Role */}
        <motion.p
          className="text-sm opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:text-gray-300"
        >
          {member.role}
        </motion.p>
      </motion.div>
    </motion.a>
  ))}
</div>
{/* Event Venues Section */}
<div className="relative z-10 mt-16 px-6 mb-28">
  <h2 className="text-4xl font-bold text-center text-cyan-400 glow-text mb-8">
    Event Venues
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
    {[
      "D1 Audi",
      "A1 Audi",
      "B5 Seminar Hall",
      "C1 Seminar Hall",
      "B2 Seminar Hall",
      "C3 Seminar Hall",
      "C3 New Seminar Hall",
      "Fountain Park",
    ].map((venue, index) => (
      <motion.div
        key={index}
        className="relative w-64 h-40 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-lg border-2 border-cyan-400 hover:shadow-cyan-500/50 overflow-hidden flex items-center justify-center transition-all duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <motion.h3
          className="text-xl font-bold text-white transition-all duration-300 group-hover:text-cyan-300"
          whileHover={{ y: -5 }}
        >
          {venue}
        </motion.h3>
      </motion.div>
    ))}
  </div>
</div>
</div>

<Countdown />
<hr className="border-t-2 border-cyan-400 w-0 mx-auto opacity-0 transition-all duration-500 ease-in-out hover:w-full hover:opacity-100" />
<Sponsors />
<JoinOurTeam />

    </div>
  );
};

export default Home;