import { motion } from "motion/react"
const About = () => {
  return (
    <section id="about" className="px-10 py-25 flex flex-col gap-6">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }} className="text-4xl font-bold border-l-4 pl-3">About</motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}className="leading-relaxed text-lg">I'm Ankitha, a Web Developer focused on building clean, responsive and user‑
            friendly websites. I enjoy combining modern UI design with smooth animations
            to deliver beautiful digital experiences.</motion.p>
    </section>
  )
}

export default About