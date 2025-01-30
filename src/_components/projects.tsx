import { ProjectItem } from "./project-item"

export const Projects = () => {
  return (
    <>
      <ProjectItem
        title="Weather.io"
        thumbnail="https://github.com/user-attachments/assets/36f826af-89a9-4fdb-bf12-46db3f669a16"
        className="order-last"
        url="https://weather-io-one.vercel.app/"
      />
      <ProjectItem
        title="Planner"
        thumbnail="https://github.com/user-attachments/assets/3e87fdd8-8a1b-4ff9-bbe3-6454e9b4c280"
        className="order-6"
        url="https://github.com/amosbarbato/nlw-planner"
      />
      <ProjectItem
        title="Jobs Calc Planning"
        thumbnail="https://github.com/user-attachments/assets/4bd3520d-f150-42ba-bfa0-f5a2a9f5ec87"
        className="order-5"
        url="https://jobscalc-tau.vercel.app/"
      />
      <ProjectItem
        title="Login Page MoveIt!"
        thumbnail="https://github.com/user-attachments/assets/04d68852-a4ac-4b79-ace8-4b0bd7f7c337"
        className="order-4"
        url="https://github.com/amosbarbato/moveit-app"
      />
      <ProjectItem
        title="Agendei App Mobile"
        thumbnail="https://github.com/user-attachments/assets/a54cb174-99f9-4fb9-8d07-7ac079e5501c"
        className="order-3"
        url="https://github.com/amosbarbato/agendei-mobile"
      />
      <ProjectItem
        title="QuickList Todo"
        thumbnail="https://github.com/user-attachments/assets/ae6815f9-063f-491d-ba58-b02d155502bb"
        className="order-2"
        url="https://github.com/amosbarbato/Quick-List-App"
      />
      <ProjectItem
        title="Finance Dashboard"
        thumbnail="https://github.com/user-attachments/assets/9a330cb7-6386-432c-98be-92320ac47a94"
        className="order-first"
        url="https://finance-dashboard-ebon.vercel.app/"
      />
    </>
  )
}