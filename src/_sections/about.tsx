import { TechIcons } from "../_components/tech-icons"

const About = () => {
  return (
    <div id="skill" className="flex flex-col justify-center py-20 px-[120px] max-md:px-10 bg-zinc-900">
      <h2 className="text-center font-bold text-2xl mb-10">
        Sobre / Hard Skils
      </h2>

      <div className="grid grid-cols-2 gap-x-12 max-md:grid-cols-1 max-md:gap-y-12">
        <div className="text-white/70 font-light text-justify text-sm space-y-3">
          <span className="font-semibold text-base">
            FullStack Developer, especializado em Java/Node.
          </span>
          <p>
            Iniciei minha carreira como Desenvolvedor FullStack no final de 2023,
            melhorando o desempenho e as integrações de aplicativos, com experiência
            no desenvolvimento de sites E-commerce. Atuando principalmente com as
            práticas de UI/UX para criar interfaces intuitivas que maximizam a
            experiência dos usuários com React.JS/Next.JS/ReactNative. Isso me
            levou a estudar e construir experiência em testes automatizados e testes
            nativos Jest, CI/CD, Azure, AWS, boas práticas de desenvolvimento, etc.
          </p>

          <p>
            Sou apaixonado por criar produtos de sucesso entregar código de alta
            qualidade em ambientes ágeis, bom team player, experiente em agilizar
            processos para melhorar a experiência do cliente e resolver problemas
            de projetos com eficiência.
          </p>
        </div>

        <TechIcons />
      </div>
    </div>
  )
}

export default About