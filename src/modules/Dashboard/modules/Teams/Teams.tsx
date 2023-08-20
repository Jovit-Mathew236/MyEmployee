import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/api";
import post from "@/lib/postman";
import { Loader2, PlusIcon } from "lucide-react"; // import React from 'react'
import { useEffect, useState } from "react";
import { TeamCard } from "../../Common/Components/Cards";
import styles from "./Teams.module.css";
import Loading from "../../Layouts/Components/loading";
import useSWR from 'swr'
import { fetcher } from "@/lib/fetcher";
import image from "@/assets/404.svg"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

const Teams = () => {
    const { data, error, isLoading } = useSWR(api.team.get, fetcher) as SWR<Task[]>

    if (error) return <Loading children={<img src={image} className="w-60"/>} />
    if (isLoading) return <Loading children={<Loader2 className="animate-spin" />} />

    const { response } = data
    return (<>
        <div className={styles.create_btn}>
            <Dialog>
                <DialogTrigger className="w-full h-full flex justify-center items-center"> <PlusIcon/></DialogTrigger>
                <CreateTask />
            </Dialog>
        </div>
        <div className="flex justify-start gap-5">
            {response.map(d => <TeamCard data={d} />)}
        </div>
    </>
    );
};

export default Teams;



const CreateTask = () => {
    const { toast } = useToast()
    const [memeber, setMemeber] = useState<string[]>([])
    const [selectedMemeber, setSelectedMemeber] = useState<string>([])
    const [priority, setPriority] = useState<string>("")
    const [date, setDate] = useState<Date>()

    useEffect(() => {
        post(api.user.get, "GET").then((res) => {
            res.json()
        })
        .then((res) => {
            setMemeber(res.response)
        })
    }, [])

    function handleSumbit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = {...Object.fromEntries(formData.entries()), members: selectedMemeber, priority, due_date: date}


        post(api.team.create, "POST" ,data).then((res) => {
            if (res.status === 200) {
                toast({
                    title: "USer Created",
                    description: "Your project has been created",
                    variant: "default"
                  })
            }
        })
        .catch((err) => {
            toast({
                title: "USer Creation Failed",
                description: err.message,
                variant: "destructive"
              })
        })

    }
    return (
        <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSumbit}>

        <DialogHeader>
          <DialogTitle>Create new user</DialogTitle>
          <DialogDescription>
            Create a new user and invite your team members to collaborate.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="first_name" className="text-right">
              Name
            </Label>
            <Input required id="first_name" name="first_name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input required id="description" type="text" name="description" className="col-span-3" />
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


          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="members" className="text-right">
                Member
            </Label>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Members</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={selectedMemeber} onValueChange={setSelectedMemeber}>
                
                    {memeber.map((d) => <DropdownMenuRadioItem value={d}>{d}</DropdownMenuRadioItem>)}
                
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
                Priority
            </Label>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Priority</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
                <DropdownMenuRadioItem value="High">High</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Medium">Medium</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Low">Low</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
            </DropdownMenu>
          </div>
            
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    );
};

