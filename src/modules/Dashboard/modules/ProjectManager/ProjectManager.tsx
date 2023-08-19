// import React from 'react'

import { Card } from "@/components/ui/card";
import { TableBody, TableCell } from "@/components/ui/table";
import { useState } from "react";

const datas = [
  { id: 1, title: "Project 1", status: "In Progress", department: "Dprt", priority: "High", ETA: "12/12/2021",due:"191" },
  { id: 2, title: "Project 2", status: "In Progress", department: "Dprt", priority: "High", ETA: "12/12/2021",due:"191" },
]

const ProjectManager =()=>{ //({Incoming, Ongoing, Completed}) => {
  // const [incoming, setIncoming] = useState(Incoming)
  // const [ingoing, setOngoing] = useState(Ongoing)
  // const [completed, setCompleted] = useState(Completed)

  return (
    <div>
      <SingleTask className="border-none bg-transparent" colors={true} data={{ id: 1, title: "", status: "Status", department: "Department", priority: "Priority", ETA: "ETA",due:"Due Date" }} />

      <div className="w-full flex flex-col">
        <h1 className="mt-5 mb-2">Incoming Tasks</h1>
        <TableBody className="w-full">
          {datas.map((data) => <SingleTask data={data} />)}  
        </TableBody>
      </div>
          
      <div className="w-full flex flex-col">
        <h1 className="mt-5 mb-2">Ongoing Tasks</h1>
        <TableBody className="w-full">
          {datas.map((data) => <SingleTask data={data} />)}  
        </TableBody>
      </div>

    <div className="w-full flex flex-col">
    <h1 className="mt-5 mb-2">Completed Tasks</h1>
    <TableBody className="w-full">
      {datas.map((data) => <SingleTask data={data} />)}  
    </TableBody>
    </div>

    </div>

  );
};

export default ProjectManager;


type SingleTaskProps = typeof datas[0];
const SingleTask = ({data, className, colors}: {data:SingleTaskProps, className?:string, colors?:boolean}) => {
  return ( 
    <Card className={"border-none bg-slate-100 mt-2 overflow-hidden shadow-none grid grid-cols-2 md:grid-cols-6 gap-2 " + className}> 
      <TableCell className="p-2  flex justify-center items-center text-center  font-medium">{data.title}</TableCell>
      <TableCell className={`p-2 flex justify-center items-center text-center  rounded-xl ${!colors ? "bg-slate-400" : ""}`} >{data.status}</TableCell>
      <TableCell className={`p-2 flex justify-center items-center text-center hidden md:block  rounded-xl ${!colors ? "bg-slate-400" : ""}`} >{data.department}</TableCell>
      <TableCell className={`p-2 flex justify-center items-center text-center hidden md:block  rounded-xl ${!colors ? "bg-slate-400" : ""}`} >{data.priority}</TableCell>
      <TableCell className={`p-2 flex justify-center items-center text-center hidden md:block  rounded-xl ${!colors ? "bg-slate-400" : ""}`} >{data.due}</TableCell>
      <TableCell className="p-2  flex justify-center items-center text-center hidden md:block ">{data.ETA}</TableCell>
    </Card>
   );
}