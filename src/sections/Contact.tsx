import { motion } from "motion/react"
const Contact = () => {
  return (
    <section id="contact"  className="px-10 py-25 flex flex-col text-color1 gap-6">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }} className="text-4xl font-bold border-l-4 pl-3">Contact</motion.h1>
        <div className="items-center justify-center flex flex-col gap-5">
            <h3 className="text-3xl font-semibold tracking-wider">Give a Call</h3>
            <h2 className="text-4xl font-bold tracking-wider">+8147876576</h2>
            <h5 className="tracking-wide">ankithakulal57@gmail.com</h5>
            <p className="tracking-wide">Perdoor,Udupi,Karnataka</p>
        </div>
    </section>
  )
}

export default Contact