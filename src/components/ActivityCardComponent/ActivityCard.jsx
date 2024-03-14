import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";
import hangout from "../../assets/images/backgroundImgs/hangout.png";
import arts from "../../assets/images/backgroundImgs/arts.png";
import food from "../../assets/images/backgroundImgs/food.png";
import physical from "../../assets/images/backgroundImgs/phys_act.png";
import edu from "../../assets/images/backgroundImgs/edu.png";
import events from "../../assets/images/backgroundImgs/events.png";
import outdoors from "../../assets/images/backgroundImgs/out_act.png";

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

        // Obtener la lista de actividades confirmadas del localStorage
    let confirmedActivities = JSON.parse(localStorage.getItem('confirmedActivitiesLocal')) || [];

    // Filtrar las actividades para eliminar la que coincide con el activity.id
    confirmedActivities = confirmedActivities.filter(confirmedActivity => confirmedActivity.id !== activity.id);

    // Guardar la lista actualizada en el localStorage
    localStorage.setItem('confirmedActivitiesLocal', JSON.stringify(confirmedActivities));


        setIsVisible(false);
        const { data, error } = await supabase
            .from('userTable')
            .update({ signedEvents: updatedEvents })
            .eq('email', localStorage.getItem('currentUser'));

        if (error) {
            throw error;
        }
        console.log('Supabase response:', data);
    }

    if (!isVisible) {
        return null; // If the card is not visible, return null to render nothing
    }

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
        <div className="flex flex-row rounded-2xl w-[90%] h-[70px] m-auto bg-white shadow-md relative" >
            <div className="block w-[17px] rounded-l-2xl bg-purple"></div>
            <div className="m-auto ml-3 text-xl" onClick={handleCardClick}>
                <div>
                    <h2>{activity.name}</h2>
                </div>
                <div className="flex flex-row gap-1 h-full w-[300px] ">
                    <p className="mb-0">{activity.time}</p>
                    <p className="mb-0">@</p>
                    <p className="mb-0">{activity.location}</p>
                </div>
            </div>
            <div style={{

                "background-image": `url(${activityImages[activity.type] || 'url-to-default-image'})`,
                "background-size": "cover",
                "background-repeat": "no-repeat",
                "width": "80px",

            }} className="bg-green rounded-r-2xl">
            </div>
            <div className="absolute top-0 right-0 p-2" onClick={handleDeleteClick}>
                <span role="img" aria-label="delete" className="text-red-500 cursor-pointer">🗑️</span>
            </div>
        </div>
    );
};

export default ActivityCard;
