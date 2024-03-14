import React, { useEffect, useState } from 'react';
import arts from "../../assets/images/backgroundImgs/arts.png";
import food from "../../assets/images/backgroundImgs/food.png";
import physical from "../../assets/images/backgroundImgs/phys_act.png";
import edu from "../../assets/images/backgroundImgs/edu.png";
import events from "../../assets/images/backgroundImgs/events.png";
import outdoors from "../../assets/images/backgroundImgs/out_act.png";
import hangout from "../../assets/images/backgroundImgs/hangout.png";

const MatchedComponent = ({ newConfirmedActivities }) => {
    // State for tracking whether to show the popup
    const [showPopup, setShowPopup] = useState(false);
    const activityImages = {
        "Arts": arts,
        "Food": food,
        "Physical": physical,
        "Education": edu,
        "Events": events,
        "Outdoor": outdoors,
        "Hangout": hangout

    }
    // Effect hook for showing the popup when newConfirmedActivities changes
    useEffect(() => {
        if (newConfirmedActivities.length > 0) {
            setShowPopup(true);
        }
    }, [newConfirmedActivities]);

    // Function for closing the popup
    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <div className="fixed  inset-0 flex items-center justify-center z-50 ">
                    <div className="bg-white p-6 shadow-lg rounded-2xl">
                        {/* match text */}
                        <h1 className="text-3xl pt-50 pb-60 flex flex-row justify-center">
                            You've got a match!
                        </h1>
                        {/* event card */}
                        <div
                            style={{

                                "background-image": `url(${activityImages[newConfirmedActivities[0].type] || 'url-to-default-image'})`,


                            }}
                            className="h-388 bg-cover bg-center relative rounded-2xl ml-10 mr-10"
                        >
                            <p className="text-4xl font-gemunu font-extrabold  pl-5 mb-3">{newConfirmedActivities[0].name}</p>
                            <p className="text-md w-[50%] font-gemunu font-extrabold  pl-7">{newConfirmedActivities[0].description}</p>
                            <p className="text-md w-[50%] font-gemunu font-extrabold  pl-7">{newConfirmedActivities[0].location}</p>
                            <p className="text-md w-[50%] font-gemunu font-extrabold  pl-7">{newConfirmedActivities[0].date}</p>
                            <p className="text-md w-[50%] font-gemunu font-extrabold  pl-7">{newConfirmedActivities[0].time}</p>
                        </div>
                        {/* add to calendar btn */}
                        <div className="flex justify-center pt-40 pb-20">
                            <button onClick={closePopup} className="bg-darkGrey text-white w-310 h-60 rounded-2xl">
                                Cool!
                            </button>
                        </div>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50" onClick={closePopup}></div>
                </div>
            )}

        </>
    );
};


export default MatchedComponent;