import React from "react";
import viewAll from "../../assets/images/grey cat/view_all-icon.svg"
import physical from "../../assets/images/grey cat/physical-grey.svg"
import arts from "../../assets/images/grey cat/arts-grey.svg"
import outdoors from "../../assets/images/grey cat/outdoors-grey.svg"
import edu from "../../assets/images/grey cat/edu-grey.svg"
import food from "../../assets/images/grey cat/food-grey.svg"
import hangout from "../../assets/images/grey cat/hangout-grey.svg"
import events from "../../assets/images/grey cat/events-grey.svg"

const MatchedComponent = ({ activity }) => {
    const activityImages = {
        "Arts": arts,
        "Food": food,
        "Physical": physical,
        "Education": edu,
        "Events": events,
        "Outdoor": outdoors,
        "Hangout": hangout

    }

    return (
        <div>
            {/* the whole screen */}
            <div className="px-40">
                {/* match text */}
                <h1 className="text-3xl pt-110 pb-60 flex flex-row justify-center">
                    You've got a match!
                </h1>
                {/* event card */}
                <div
                    style={{

                        "background-image": `url(${activityImages[activity.type] || 'url-to-default-image'})`,


                    }}
                    className="h-388 bg-cover bg-center relative rounded-2xl"
                >
                    <p className="text-4xl font-gemunu font-extrabold  pl-4">{activity.name}</p>
                </div>
                {/* add to calendar btn */}
                <div className="flex justify-center pt-40">
                    <button className="bg-darkGrey text-white w-310 h-60 rounded-2xl">
                        Cool!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MatchedComponent;