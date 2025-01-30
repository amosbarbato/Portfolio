import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"

const Hero = () => {
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
          <h1 className="font-medium text-2xl">
            Hello World! Meu chamo Amós Barbato e sou <br />
            <span className="font-extrabold text-5xl bg-gradient-to-r from-red-400 to-violet-600 inline-block text-transparent bg-clip-text">
              Desenvolvedor FullStack
            </span>
          </h1>

          <div className="space-x-4">
            <Button>Get In Touch</Button>
            <Button variant="outline">Download CV</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero