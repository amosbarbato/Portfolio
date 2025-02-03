import { Button } from "../_components/ui/button"

const Navbar = () => {
  const toScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="bg-zinc-900">
      <div className="flex justify-center py-3">
        <Button variant="link">Home</Button>
        <Button
          variant="link"
          onClick={() => toScroll("skill")}
        >
          Skills
        </Button>
        <Button
          variant="link"
          onClick={() => toScroll("portfolio")}
        >
          Portfolio
        </Button>
        <Button
          variant="link"
          onClick={() => toScroll("contact")}
        >
          Contato
        </Button>
      </div>
    </nav>
  )
}

export default Navbar