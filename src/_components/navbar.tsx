import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <nav className="bg-zinc-900">
      <div className="flex justify-center py-3">
        <Button variant="link">Home</Button>
        <Button variant="link">Sobre</Button>
        <Button variant="link">Portfolio</Button>
        <Button variant="link">Skills</Button>
        <Button variant="link">Contato</Button>
      </div>
    </nav>
  )
}

export default Navbar