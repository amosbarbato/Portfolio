import { Avatar, AvatarFallback, AvatarImage } from "../_components/ui/avatar"
import { Button } from "../_components/ui/button"

import curriculo from "../assets/curriculo.pdf"

const Hero = () => {
  const toScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="border-4 border-transparent hover:border-indigo-900 rounded-full">
        <Avatar className="m-2">
          <AvatarImage src="https://avatars.githubusercontent.com/u/125219352?v=4" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="mt-8">
        <div className="w-[650px] text-center space-y-8">
          <h1 className="font-medium text-2xl max-md:hidden">
            Hello World! Meu chamo Amós Barbato e sou <br />
            <span className="font-extrabold text-5xl bg-gradient-to-r from-red-400 to-violet-600 inline-block text-transparent bg-clip-text">
              Desenvolvedor FullStack
            </span>
          </h1>

          <div className="space-x-4">
            <Button onClick={() => toScroll("contact")}>
              Entre em contato
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open(`${curriculo}`)}
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero