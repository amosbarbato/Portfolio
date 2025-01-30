import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { cn } from "../_lib/utils"
import { ReactNode } from "react"

interface Projectprops {
  title: string
  thumbnail: string
  className?: ReactNode
  url: string
}

export const ProjectItem = ({ title, thumbnail, className, url }: Projectprops) => {
  return (
    <Card className={cn(className)}>
      <CardContent>
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-[200px] object-cover rounded-t-2xl"
        />
      </CardContent>
      <CardHeader className="">
        <div className="flex justify-between items-center">
          <p className="font-bold uppercase">{title}</p>
          <ArrowUpRight
            onClick={() => window.open(`${url}`)}
            className="cursor-pointer"
          />
        </div>
      </CardHeader>
    </Card>
  )
}
