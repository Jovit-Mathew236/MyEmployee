import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { api } from "@/lib/api"
import post from "@/lib/postman"

const Login = () => {

    function handleLogin(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()           

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        post(api.user.get, "POST", data)
        .then(()=>{
            toast({
                title: "Login Successful",
                description: "You have been logged in",
                variant: "default"
            })
        })
        .catch((err)=>{
            toast({
                title: "Login Failed",
                description: err.message,
                variant: "destructive"
            })
        })
    }

    function handleCreate(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()       

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        post(api.user.create, "POST", data)
        .then(()=>{
            toast({
                title: "Account Created Successful",
                description: "You have been logged in",
                variant: "default"    
            })
        })
        .catch((err)=>{
            toast({
                title: "Login Failed",
                description: err.message,
                variant: "destructive"
            })
        })
    }

  return (
    <div className="w-screen h-screen flex justify-center items-center" style={{
        backgroundImage: "url('/src/assets/loginBackground.png')"
    }}>

<Tabs defaultValue="newAcc" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="newAcc">Create</TabsTrigger>
                <TabsTrigger value="login">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="newAcc">
                <Card>
                <CardHeader>
                    <CardTitle>Create new account</CardTitle>
                    <CardDescription>
                        Click sign-in to continue.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleCreate}>
                <CardContent>
                    <div className="space-y-1 flex-col-reverse flex gap-1">
                        <Input name="name" id="name" type="text" required disabled className="peer"/>
                        <Label htmlFor="name">Name</Label>
                    </div>
                    <div className="space-y-1 flex-col-reverse flex gap-1">
                        <Input name="email" id="email" type="email" required className="peer"/>
                        <Label htmlFor="email">Email</Label>
                    </div>
                    <div className="space-y-1 flex-col-reverse flex gap-1">
                        <Input name="newpass" id="newpass" type="password" placeholder="•••• ••••" required className="peer"/>
                        <Label htmlFor="newpass">New Password</Label>
                    </div>
                    <div className="space-y-1 flex-col-reverse flex gap-1">
                        <Input name="newpassconfirm" id="newpassconfirm" type="text" placeholder="•••• ••••" required className="peer"/>
                        <Label htmlFor="newpassconfirm">Confirm Password</Label>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between flex-row-reverse">
                    <Button type="submit" variant="secondary">Sign-in</Button>
                </CardFooter>
                </form>
                </Card>
            </TabsContent>
            <TabsContent value="login">
                <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        Click login to continue.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" id="email" type="email" required/>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input name="password" id="password" type="password" placeholder="•••• ••••" required/>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between flex-row-reverse">
                    <Button type="submit" variant="secondary">Login</Button>
                </CardFooter>
                </form>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
  )
}

export default Login