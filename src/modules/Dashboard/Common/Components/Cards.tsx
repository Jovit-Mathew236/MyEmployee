import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getTime } from "@/lib/time";
import { User } from "lucide-react";
import style from "./Cards.module.css";

type Data = Task

export const TeamCard = ({ data }: { data: Data }) => {
    return (
        <Card className={style.TeamCard + " group"} style={{ backgroundImage: "url('/src/assets/cardImage.png')" }} >
            <div className="mb-auto mt-10 text-2xl text-white text-center">
                <h3>{data.name}</h3>
                <p>{data.description}</p>
            </div>
            <CardFooter className="w-full p-2 flex flex-col gap-2 bg-white group-hover:bg-card-foreground rounded-b-lg transition-all">
                <div className="flex flex-row gap-2 justify-center text-sm">
                    <h3 className="flex items-center">
                        <User size={"15px"} /> {data.members.length} Members
                    </h3>
                    <h3>| Priority {data.priority}</h3>
                </div>
                <div className="flex gap-2 w-full">
                    <Button className="w-full rounded-lg bg-white text-black" variant="ghost" > {getTime(Date.now(),new Date(data.due_date).getTime())} </Button>
                    <Button className="w-full rounded-lg text-white" variant="destructive"> {data.eta} </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export const TaskCard = ({data, onClick }: {data: Project,  onClick: () => void }) => {
    const SmallAvater = ({ className }: { className: string }) => {
        return (
            <Avatar className={className}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        );
    };
    return (
        <Card className={style.taskCard} onClick={onClick}>
            <CardHeader className="flex flex-col gap-3">
                <Avatar className="rounded-none">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle>{data.name}</CardTitle>
            </CardHeader>

            <CardContent className="text-start">
                <CardDescription className="text-xl">-{data.description}</CardDescription>
                <CardDescription className="text-xl">
                    -{data.status}
                </CardDescription>
            </CardContent>

            <CardFooter className="mt-auto flex flex-col items-start gap-3">
                <Progress value={data.progress} className="h-2" />
                <span className="ps-2">{data.progress}%</span>
                <div className="flex flex-row w-full items-center">
                    <Button variant="secondary"> {getTime(Date.now(), new Date(data.deadline).getTime())}</Button>
                    <div className="relative ms-auto">
                        <SmallAvater className="" />
                        <SmallAvater className="absolute z-0 bottom-0 -translate-x-5" />
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};
