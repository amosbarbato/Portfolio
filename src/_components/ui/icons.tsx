import { ReactNode } from "react"

interface IconsProp {
  icon: ReactNode
}

export const Icons = ({ icon }: IconsProp) => {
  return (
    <div className="flex items-center justify-center rounded-md border border-zinc-800 hover:bg-zinc-800 hover:scale-110 hover:animate-pulse h-20 shadow-md">
      {icon}
    </div>
  )
}
