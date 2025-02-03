import { Mail } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col justify-center py-20 px-[120px] bg-zinc-900">
      <h2 className="text-center font-bold text-2xl mb-10">
        Contato
      </h2>

      <div className="text-white/70 font-light text-sm space-y-4">
        <p className="text-sm font-light text-white/70">
          Entre em contato ou acompanhe as minhas redes sociais!
        </p>
        <div className="flex gap-6 items-center text-white">
          <SiLinkedin
            size={22}
            onClick={() => window.open("https://www.linkedin.com/in/amos-barbato/")}
            className="cursor-pointer"
          />
          <SiGithub
            size={22}
            onClick={() => window.open("https://github.com/amosbarbato")}
            className="cursor-pointer"
          />
          <Mail
            size={24}
            onClick={() => window.open("mailto:amosbarbato@gmail.com")}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact