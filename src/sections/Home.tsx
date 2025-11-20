import profile from "../assets/ankitha.jpg";
import { motion } from "motion/react"

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col gap-6 justify-center items-center relative overflow-hidden px-5 py-20 text-center">
        <motion.img 
            src={profile} 
            alt="Ankitha" 
            initial={{ scale: 0 }} 
            animate={{ scale: 1, rotate: 360 }} 
            transition={{ duration: 0.5 }}
            className="rounded-full object-cover w-40 h-40 shadow-xl border-2 border-sky-400/40 relative z-0"
        />
        <motion.h1 initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} 
          className="text-5xl font-bold"
        >
          Hi, I'm <span>Ankitha</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg"
        >
          A passionate Web Developer crafting modern & user-friendly digital experiences.
        </motion.p>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          href="#projects" 
          className="text-lg hover:text-gray-300 hover:text-sm"
        >
          View my work
        </motion.a>
    </section>
  )
}

export default Home