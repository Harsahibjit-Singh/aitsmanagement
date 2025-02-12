import { motion } from "framer-motion";

const sponsors = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", link: "https://google.com" },
  { name: "Amazon", logo: "https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-Isolated-HD.png", link: "https://amazon.com" },
  { name: "Intel", logo: "https://pngimg.com/uploads/intel/intel_PNG1.png", link: "https://www.intel.com" },
];

const Sponsors = () => {
  return (
    <div className="relative z-10 mt-16 flex flex-col items-center justify-center text-center mb-16">
      <motion.h3
        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Our Proud Sponsors
      </motion.h3>

      <div className="mt-8 flex flex-wrap justify-center gap-8 px-6">
        {sponsors.map((sponsor, index) => (
          <motion.a
            key={index}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-48 h-32 flex items-center justify-center bg-gray-900 border-2 border-cyan-400 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-500"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-28 h-auto opacity-80 transition-all drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] 
                        group-hover:drop-shadow-[0_0_25px_rgba(0,255,255,0.9)] group-hover:opacity-100"
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
