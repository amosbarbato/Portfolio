import { Projects } from "../_components/projects"

const Portfolio = () => {
  return (
    <div className="flex flex-col justify-center py-20 px-[120px]">
      <h2 className="text-center font-bold text-2xl mb-10">
        Projetos
      </h2>

      <div className="grid grid-cols-3 grid-rows-3 gap-10">
        <Projects />
      </div>
    </div>
  )
}

export default Portfolio