import { motion } from "motion/react"
const Skills = () => {
    const skills=['HTML','CSS','Javascript','React','Bootstrap','TailwindCSS','PHP-Laravel','MySQL','Node','Framer-Motion','Git'];
  return (
    <section id="skills" className="px-10 py-25 flex flex-col text-color1 gap-6">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }} className="text-4xl font-bold border-l-4 pl-3">Skills</motion.h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill,index)=>(
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }} key={skill} className="p-4 bg-color2 text-color4 rounded-lg border-1 border-sky-400/40 shadow-md shadow-neon/20 text-center font-semibold">
                    {skill}
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Skills