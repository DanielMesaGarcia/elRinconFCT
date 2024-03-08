import React from "react";

const ActivityCard = ({ activity }) => {
    return (
        <div className="flex flex-row rounded-2xl w-[90%] h-[70px] m-auto bg-white shadow-md">
            <div className="block w-[17px] rounded-l-2xl bg-purple">

            </div>
            <div className="m-auto ml-3 text-2xl">
                <div>
                    <h2 >{activity.name}</h2>
                </div>
                <div className="flex flex-row gap-1 h-full ">
                    <p className="mb-0">{activity.time} </p>
                    <p className="mb-0">@</p>
                    <p className="mb-0">{activity.location}</p>
                </div>
            </div>

            <div className="bg-green w-[92px] rounded-r-2xl">
                <img src={activity.imageUrl} alt={activity.title} />
            </div>


        </div>
    );
};

export default ActivityCard;