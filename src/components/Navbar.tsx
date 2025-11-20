import { motion } from "motion/react"

const Navbar = () => {
  return (
    <motion.nav 
        initial={{ y: -40, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.6 }}
        className='fixed z-50 top-0 w-full bg-neutral-400 flex justify-between items-center p-4'
    >
        <h1 className='text-2xl font-bold'>Ankitha</h1>
        <ul className='flex flex-wrap gap-3 text-gray-300 font-semibold text-sm md:text-lg'>
            <a href="#home" className='hover:text-white'>Home</a>
            <a href="#about" className='hover:text-white'>About</a>
            <a href="#skills" className='hover:text-white'>Skills</a>
            <a href="#projects" className='hover:text-white'>Projects</a>
            <a href="#contact" className='hover:text-white'>Contact</a>
        </ul>
    </motion.nav>
  )
}

export default Navbar