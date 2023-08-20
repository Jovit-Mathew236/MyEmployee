// import React from 'react'

import { Card } from "@/components/ui/card";
import { TableCell } from "@/components/ui/table";
import { Reorder, useDragControls } from "framer-motion";
import { Grip } from "lucide-react";
import { useEffect, useState } from "react";
// import React from 'react'

import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
 
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import styles from "./Status.module.css"

type statusData = {
    id: string,
    name: string,
    status: "incoming" | "ongoing" | "completed" | "",
    department: string,
    priority: "High" | "Medium" | "Low" | "Priority" ,
    ETA: string,
    due: string
}

const datas:statusData[] = [
    {
        id: "1",
        name: "Task 1",
        status: "incoming",
        department: "Dprt",
        priority: "High",
        ETA: "12/12/2021",
        due: "191"
    },
    {
        id: "2",
        name: "Task 2",
        status: "completed",
        department: "Dprt",
        priority: "High",
        ETA: "12/12/2021",
        due: "191"
    },
    {
        id: "2",
        name: "Task 3",
        status: "completed",
        department: "Dprt",
        priority: "High",
        ETA: "12/12/2021",
        due: "191"
    }
]

type titledata = {
    title: string
}

const Status = () => {
    const [data, setData] = useState<(statusData | titledata)[]>([])
    // useEffect(() => console.log("Hi"), [data])
    useEffect(() => {
            (async() => {

                // const getted = await fetch('http://localhost:3000/api/v1/projects')
                const status:statusData[] = datas //await getted.json()

                const x:statusData[] = []
                const y:statusData[] = []
                const z:statusData[] = [] 

                status.map(i => {
                    if (i.status === 'incoming') x.push(i)
                    else if (i.status === 'ongoing') y.push(i)
                    else if (i.status === 'completed') z.push(i)                
                })
                const xx = { title: 'Incoming' }
                const yy = { title: 'Ongoing' }
                const zz = { title: 'Completed' }
                setData([xx,...x, yy,...y, zz,...z])
                
        })()
    }, [])

    return (
        <div className="relative w-full">
        <div className={styles.create_btn}>
            <Dialog>
                <DialogTrigger className="w-full h-full flex justify-center items-center"><PlusIcon/></DialogTrigger>
                <AddTasks projectID={"1234567"} />
            </Dialog>
        </div>
        <div>
            <SingleTask
                className="border-none bg-transparent"
                colors={true}
                data={{
                    id: "1",
                    name: "",
                    department: "Department",
                    priority: "Priority",
                    ETA: "ETA",
                    due: "Due Date"
                }}
            />

            <div className="w-full flex flex-col">
            <Reorder.Group axis="y" values={data} onReorder={setData}>
               {
                   data.map((d, index) => 
                    <Reorder.Item key={index} value={d} >

                       {"title" in d ? <h1 className="mt-5 mb-2" key={index}>{d?.title} Tasks</h1>
                       : <SingleTask key={index} data={d} />   }
                    </Reorder.Item>
                    )
                }
                </Reorder.Group>
            </div>     
        </div>
        </div>
    );
};

// const Styler = {
//     incoming: "bg-slate-400",
//     ongoing: "bg-slate-400",
//     completed: "bg-slate-400"

// }

const SingleTask = ({ data, className, colors }: { data: Omit<statusData, "status">, className?: string, colors?: boolean }) => {
    const controls = useDragControls()
    const styleClass = "p-2 justify-center items-center text-center rounded-xl hover:bg-slate-400 transition-all duration-200 "
    return (
        <Card className={ "border-none bg-slate-100 mt-2 overflow-hidden shadow-none grid grid-cols-2 md:grid-cols-6 gap-2 " + className } >
            <TableCell className={styleClass + "font-medium"}>
                {data.name}
            </TableCell>
            <TableCell
              className={styleClass + `hidden md:flex ${ !colors ? "bg-slate-400" : "" }`} >
                {data.department}
            </TableCell>
            <TableCell
                className={styleClass + `hidden md:flex ${ !colors ? "bg-slate-400" : "" }`} >
                {data.priority}
            </TableCell>
            <TableCell
              className={styleClass + `hidden md:flex ${ !colors ? "bg-slate-400" : "" }`} >
                {data.due}
            </TableCell>
            <TableCell className={ styleClass + "hidden md:flex"}>
                {data.ETA}
            </TableCell>
            <TableCell className={styleClass + "flex"}>

                <Grip className="text-slate-400" onPointerDown={(e) => controls.start(e)} />
            </TableCell>
        </Card>
    );
};

export default Status;


const AddTasks = ({projectID}:{projectID:string}) => {
    const { toast } = useToast()
    const [date, setDate] = useState<Date>()

    function handleSumbit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        if (date === undefined) {
            toast({
                title: "Please select a date",
                description: "You need to select a date for the deadline",
                variant: "destructive"
              })
        }

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        console.log(data)


    }
    return ( 
        <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSumbit}>

        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
          <DialogDescription>
            Create a new Task and invite your team members to collaborate.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input required id="name" name="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input required id="description" name="description" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Deadline
            </Label>
            <Popover>
            <PopoverTrigger>
                <Button
                type="button"
                variant={"outline"}
                className={ "w-[280px] justify-start text-left font-normal"} >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                />
            </PopoverContent>
            </Popover>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
            <Input required id="projectID" value={projectID} name="department" type="hidden" />
            <Input required id="deadline" value={date?.toString() || 0} name="deadline" type="hidden" />
        </form>
      </DialogContent>
     );
}