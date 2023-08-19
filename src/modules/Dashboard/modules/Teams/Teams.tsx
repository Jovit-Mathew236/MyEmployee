// import React from 'react'
import { TeamCard } from "../../Common/Components/Cards";

const data = [
    { title: "Production", members: 5, task: 7, id: 1, img: "/cardImage.png" },
    { title: "Production", members: 5, task: 7, id: 1, img: "/cardImage.png" }
];

const Teams = () => {
    return (
        <div className="flex justify-start gap-5">
            <TeamCard data={data[0]} />
        </div>
    );
};

export default Teams;
