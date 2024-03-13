import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";

const ActivityCard = ({ activity }) => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);

    const handleCardClick = () => {
        navigate(`/DetailsTestPage/${activity.id}`);
    }

    const handleDeleteClick = async () => {
        const signedEventsLocal = JSON.parse(localStorage.getItem('signedEventsLocal')) || [];
        const updatedEvents = signedEventsLocal.filter(eventId => eventId !== activity.id);
        localStorage.setItem('signedEventsLocal', JSON.stringify(updatedEvents));
        setIsVisible(false);
        const { data, error } = await supabase
            .from('userTable')
            .update({signedEvents: updatedEvents})
            .eq('email', localStorage.getItem('currentUser'));

        if (error) {
            throw error;
        }
        console.log('Supabase response:', data); 
    }

    if (!isVisible) {
        return null; // If the card is not visible, return null to render nothing
    }

    return (
        <div className="flex flex-row rounded-2xl w-[90%] h-[70px] m-auto bg-white shadow-md relative" >
            <div className="block w-[17px] rounded-l-2xl bg-purple"></div>
            <div className="m-auto ml-3 text-2xl" onClick={handleCardClick}>
                <div>
                    <h2>{activity.name}</h2>
                </div>
                <div className="flex flex-row gap-1 h-full ">
                    <p className="mb-0">{activity.time}</p>
                    <p className="mb-0">@</p>
                    <p className="mb-0">{activity.location}</p>
                </div>
            </div>
            <div className="bg-green w-[92px] rounded-r-2xl">
                <img src={activity.imageUrl} alt={activity.title} />
            </div>
            <div className="absolute top-0 right-0 p-2" onClick={handleDeleteClick}>
                <span role="img" aria-label="delete" className="text-red-500 cursor-pointer">🗑️</span>
            </div>
        </div>
    );
};

export default ActivityCard;
