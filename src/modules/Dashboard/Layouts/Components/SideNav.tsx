import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { api } from "@/lib/api";
import post from "@/lib/postman";
import styles from "./Layout.module.css";
import { Button } from "@/components/ui/button";
import { DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { PlusIcon } from "lucide-react";

const SideNav = () => {
    return (
        <div className={styles.sidebar}>
            <p
                style={
                    window.location.pathname === "/dashboard/my-projects"
                        ? {
                              backgroundColor: "#000",
                              color: "#fff"
                          }
                        : {}
                }
                onClick={() => {
                    window.location.pathname = "/dashboard/my-projects";
                }}
            >
                <i className="fi fi-sr-apps"></i>
            </p>
            <p
                style={
                    window.location.pathname === "/dashboard/project-status"
                        ? {
                              backgroundColor: "#000",
                              color: "#fff"
                          }
                        : {}
                }
                onClick={() => {
                    window.location.pathname = "/dashboard/project-status";
                }}
            >
                <i className="fi fi-sr-bars-progress"></i>
            </p>
            <p
                style={
                    window.location.pathname === "/dashboard/teams"
                        ? {
                              backgroundColor: "#000",
                              color: "#fff"
                          }
                        : {}
                }
                onClick={() => {
                    window.location.pathname = "/dashboard/teams";
                }}
            >
                <i className="fi fi-br-settings-sliders"></i>
            </p>
                <Dialog >
                    <DialogTrigger className="w-12 h-12 rounded-full bg-card-foreground text-card flex justify-center items-center"> <PlusIcon/></DialogTrigger>
                    <CreateUser />
                </Dialog>
        </div>
    );
};

export default SideNav;


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

