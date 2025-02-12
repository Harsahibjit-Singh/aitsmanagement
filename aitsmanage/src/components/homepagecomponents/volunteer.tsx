import { motion } from "framer-motion";

const JoinOurTeam = () => {
  return (
    <section className="relative w-full py-20 bg-black text-center overflow-hidden">
      <div className="container mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Become a Part of Our Team
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Join hands with us and contribute to the success of the All India Technology Summit 2025.  
          Your skills and dedication can help shape the future of technology, innovation, and research.
        </motion.p>

        {/* Animated Call to Action */}
        <motion.a
          href="https://forms.gle/sRuw1icW6y3pkrDEA" target="_blank"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-700 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Now
        </motion.a>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-cyan-400 rounded-full opacity-30"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-blue-600 rounded-full opacity-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default JoinOurTeam;
