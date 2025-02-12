import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("March 24, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-10 mt-16 flex flex-col items-center text-center space-y-6 mb-16">
      {/* Event Date */}
      <motion.h2
  className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-16"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
    <p className="mb-16">ON</p>
  24<sup className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent text-xl align-super">th</sup> 
  - 26<sup className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent text-xl align-super pr-2">th</sup> 
   March, 2025
</motion.h2>

{/* Countdown Timer */}
<motion.div
  className="flex flex-wrap justify-center gap-4 text-white mb-20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  {Object.entries(timeLeft).map(([unit, value], index) => (
    <motion.div
      key={index}
      className="flex flex-col items-center px-4 py-3 bg-gray-900 border-2 border-cyan-400 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
    >
      <span className="text-4xl md:text-6xl sm:text-3xl font-bold text-cyan-400">{value}</span>
      <span className="text-xs md:text-lg sm:text-sm uppercase font-semibold tracking-wider text-gray-300">{unit}</span>
    </motion.div>
  ))}
</motion.div>

      <motion.h2
             className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-32"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            >
            <p className="mb-16 mt-16">AT</p>
            <span className="text-red-600 drop-shadow-md">Chandigarh</span>{" "}
            <span className="text-white drop-shadow-md m">University</span>
            <br></br>
      </motion.h2>
      <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative"
            >
            <img
                src="https://www.cuchd.in/research/assets/uploads/logo-white.png"
                alt="Chandigarh University"
                className="w-56 h-24 inline-block drop-shadow-[0_0_15px_rgba(255,0,0,0.8)] animate-pulse mb-16"
            />
        </motion.a>

    </div>  
  );
};

export default Countdown;
