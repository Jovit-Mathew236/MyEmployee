import { Button } from "@/components/ui/button";
import style from "./Cards.module.css";
import { User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

type Data = {
    title: string;
    members: number;
    task: number;
    id: number;
    img: string;
};

export const TeamCard = ({ data }: { data: Data }) => {
    return (
        <Card className={style.TeamCard + " group"} style={{ backgroundImage: "url('/src/assets/cardImage.png')" }} >
            <div className="mb-auto mt-10 text-2xl text-white">
                <h3>{data.title}</h3>
            </div>
            <CardFooter className="w-full p-2 flex flex-col gap-2 bg-white group-hover:bg-card-foreground rounded-b-lg transition-all">
                <div className="flex flex-row gap-2 justify-center text-sm">
                    <h3 className="flex items-center">
                        <User size={"15px"} /> {data.members} Members
                    </h3>
                    <h3 className="text-slate-500">{data.task} TASKS</h3>
                </div>
                <div className="flex gap-2 w-full">
                    <Button className="w-full rounded-lg bg-white text-black" variant="ghost" > x </Button>
                    <Button className="w-full rounded-lg" variant="destructive"> x </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export const TaskCard = ({ onClick }: { onClick: () => void }) => {
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
                <CardTitle>GTA CODESTORM</CardTitle>
            </CardHeader>

            <CardContent className="text-start">
                <CardDescription className="text-xl">-Design</CardDescription>
                <CardDescription className="text-xl">
                    -Development
                </CardDescription>
            </CardContent>

            <CardFooter className="mt-auto flex flex-col items-start gap-3">
                <Progress value={33} className="h-2" />
                <span className="ps-3">33%</span>
                <div className="flex flex-row w-full items-center">
                    <Button variant="secondary"> 2 days left </Button>
                    <div className="relative ms-auto">
                        <SmallAvater className="" />
                        <SmallAvater className="absolute bottom-0 -translate-x-5" />
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};
