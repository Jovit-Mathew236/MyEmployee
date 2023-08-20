// import React from 'react'
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/api";
import post from "@/lib/postman";
import { PlusIcon } from "lucide-react";
import { TeamCard } from "../../Common/Components/Cards";
import styles from "./Teams.module.css";
import { useState } from "react";

const data = [
    { title: "Production", members: 5, task: 7, id: 1, img: "/cardImage.png" },
    { title: "Production", members: 5, task: 7, id: 1, img: "/cardImage.png" }
];

const Teams = () => {
    return (<>
        <div className={styles.create_btn}>
            <Dialog>
                <DialogTrigger className="w-full h-full flex justify-center items-center"> <PlusIcon/></DialogTrigger>
                <CreateUser />
            </Dialog>
        </div>
        <div className="flex justify-start gap-5">
            <TeamCard data={data[0]} />
        </div>
    </>
    );
};

export default Teams;

const CreateUser = () => {
    const { toast } = useToast()
    const [role, setRole] = useState<string>("0")

    function handleSumbit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        data['roles'] = [parseInt(role)] as unknown as string

        post(api.user.create, "POST" ,data).then((res) => {
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
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input required id="email" type="email" name="email" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mobile" className="text-right">
              Phone
            </Label>
            <Input required id="mobile" type="number" maxLength={10} minLength={10} name="mobile" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="teams" className="text-right">
              Team
            </Label>
            <Input required id="teams" type="number" value={1} name="teams" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
              Role
            </Label>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Roles</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={role} onValueChange={setRole}>
                <DropdownMenuRadioItem value="1">HOD</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="2">Staff</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="3">CEO</DropdownMenuRadioItem>
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

