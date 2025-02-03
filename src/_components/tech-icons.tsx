import { FaJava } from "react-icons/fa"
import { Icons } from "./ui/icons"
import { SiCss3, SiGithub, SiHtml5, SiJavascript, SiJest, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiSpringboot, SiTailwindcss, SiTypescript } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

export const TechIcons = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-3 gap-7 max-md:grid-cols-3 max-md:grid-rows-5">
      <Icons icon={<SiReact size={32} />} />
      <Icons icon={<SiJavascript size={32} />} />
      <Icons icon={<SiNodedotjs size={32} />} />
      <Icons icon={<FaJava size={32} />} />
      <Icons icon={<SiTypescript size={32} />} />
      <Icons icon={<SiPrisma size={32} />} />
      <Icons icon={<SiPostgresql size={32} />} />
      <Icons icon={<SiJest size={32} />} />
      <Icons icon={<SiSpringboot size={32} />} />
      <Icons icon={<SiNextdotjs size={32} />} />
      <Icons icon={<SiHtml5 size={32} />} />
      <Icons icon={<SiCss3 size={32} />} />
      <Icons icon={<SiTailwindcss size={32} />} />
      <Icons icon={<VscVscode size={32} />} />
      <Icons icon={<SiGithub size={36} />} />
    </div>
  )
}
