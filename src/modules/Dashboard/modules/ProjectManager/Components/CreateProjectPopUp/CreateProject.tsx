// import React from 'react'

import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"

const CreateProject = ({departmentId}:{departmentId:string}) => {
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
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>
            Create a new project and invite your team members to collaborate.
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
        <Input required id="department" value={departmentId} name="department" type="hidden" />
        <Input required id="deadline" value={date?.toString() || 0} name="deadline" type="hidden" />
        </form>
      </DialogContent>
    );
};

export default CreateProject;
