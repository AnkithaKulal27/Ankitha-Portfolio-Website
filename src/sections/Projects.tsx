import { motion } from "motion/react"
import { ArrowRight } from 'lucide-react';

type Project={
        id:number;
        title:string;
        tools:string[];
        hosturl?:string;
    }
    
const Projects = () => {
    const projects:Project[]=[
        {
                id:1,
                title:'ERP System for Project and Employee Management with Task & Job Tracking',
                tools:["HTML", "CSS", "Bootstrap", "JavaScript", "PHP-Laravel","MySQL"],
        },
        {
                id: 2,
                title: "Food Ordering Website",
                tools:["MongoDB", "Express.js", "React.js", "Node.js"],
        },
        {
                id: 3,
                title: "Hotel Website",
                tools:["HTML", "CSS", "JavaScript"],
        },
        {
                id: 4,
                title: "Wallpaper Nest App (Flutter)",
                tools:["Flutter-Dart"],
        },
        {
                id: 5,
                title: "Product Store",
                tools:["React","TypeScript","Tailwind CSS","Rest-API"],
                hosturl:"https://product-store-using-rest-api.vercel.app/",
        },
    ];
  return (
    <section id="projects" className="px-10 py-25 flex flex-col text-color1 gap-6">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }} className="text-4xl font-bold border-l-4 pl-3">Projects</motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project)=>(
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} key={project.id} 
                    className="p-4 bg-color2 text-color4 rounded-lg border-1 border-sky-400/40 shadow-md shadow-neon/20 items-center font-semibold"
                >
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {project.tools.map((tool,index)=>(
                            <p key={index} className="text-xs p-3 bg-color3/40 rounded-lg shadow-md border-1 border-sky-400/40 shadow-neon/20 items-center font-semibold">{tool}</p>
                        ))}
                    </div>
                    {project.hosturl?(
                        <div className="flex gap-2 mt-5 justify-end items-center">
                            <a href={project.hosturl} target="_blank">Live Demo</a>
                            <ArrowRight className="mt-1" size={20}/>
                        </div>
                    ):null}
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Projects