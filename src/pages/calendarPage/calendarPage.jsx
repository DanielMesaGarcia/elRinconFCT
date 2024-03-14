import React, { useEffect, useState } from "react";
import ActivityCard from "../../components/ActivityCardComponent/ActivityCard";
import { supabase } from "../../services/supabaseClient";
import { Link } from "react-router-dom";
import NavMenu from "../../components/navMenu";
import homeIcon from "../../../src/assets/images/icons/home.svg";
//import HomeIcon from "./images/home.png";

const CalendarPage = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetchActivities();
    }, []);

    const fetchActivities = async () => {
        let { data: activities, error } = await supabase.from('activities').select('*');

        //Checking if an activity is confirmed so it can be displayed as an actual event
        const filteredActivities = activities.filter(activity => {
            return localStorage.getItem('signedEventsLocal').includes(activity.id) && activity.isConfirmed;
        });

        if (error) console.log("Error fetching activities: ", error);
        else setActivities(filteredActivities);
    };

    // Group activities by date
    const activitiesByDate = activities.reduce((acc, activity) => {
        const date = activity.date;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(activity);
        return acc;
    }, {});

    // Function to format date
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Sort activities by date
    const sortedActivities = Object.entries(activitiesByDate).sort((a, b) => new Date(a[0]) - new Date(b[0]));
    return (
        <>
            <div className="flex flex-col h-844">
                <div className="absolute top-40">
                    <Link to="/home">
                        <img src={homeIcon} alt="Home" />
                    </Link>
                </div>
                <div className="flex justify-center items-center w-full ">
                    <h2 className="text-3xl mt-60 mb-30">Calendar</h2>
                </div>
                <div className="overflow-y-auto pb-80">
                    {sortedActivities.map(([date, activities], index) => (
                        <div key={index} className="mt-30 flex flex-col gap-5">
                            <h3 className=" text-xl font-semibold">{formatDate(date)}</h3>
                            {activities.map((activity, index) => (
                                <ActivityCard key={index} activity={activity} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <NavMenu
                page="calendar"
            />
        </>
    )
};

export default CalendarPage;