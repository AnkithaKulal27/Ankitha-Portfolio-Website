import { Linkedin,Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="justify-center flex gap-20 py-6 bg-color1 border-t border-white/10">
        <p className="text-gray-300 text-center">Ankitha | Web Developer</p>
        <div className="flex gap-5 mt-1">
          <a href="https://www.linkedin.com/in/ankitha-kulal-b92215281" target='_blank'><Linkedin size={20}/></a>
          <a href="https://github.com/AnkithaKulal27" target='_blank'><Github size={20}/></a>
        </div>
    </footer>
  )
}

export default Footer