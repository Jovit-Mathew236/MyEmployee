// import React from 'react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import style from "./ProjectManager.module.css"


const ProjectManager = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className={style.taskCard}>
        <div className="my-auto text-2xl">
          <h3>Production</h3>
        </div>
        <div className="flex flex-row gap-2 bottom-16 absolute text-md">
          <h3>5 Members</h3>
          <h3>7 TASKS</h3>
        </div>
        <div className="flex gap-2 w-full p-2">
          <Button className="w-full py-2 rounded-sm bg-white text-black" variant="ghost"> x</Button>
          <Button className="w-full py-2 rounded-sm" variant="destructive"> x</Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectManager