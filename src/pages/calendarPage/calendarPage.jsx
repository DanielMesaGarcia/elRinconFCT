import React, { useEffect, useState } from "react";
import ActivityCard from "../../components/ActivityCardComponent/ActivityCard";
import { supabase } from "../../services/supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import NavMenu from "../../components/navMenu";


const CalendarPage = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetchActivities();
    }, []);

    const fetchActivities = async () => {
        let { data: activities, error } = await supabase.from('activities').select('*');

        //added a filter so we only get the activities the user is signed into
        //better have this until we have a proper match thing
        const filteredActivities = activities.filter(activity => localStorage.getItem('signedEventsLocal').includes(activity.id));

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
            <body className="bg-grey">
                <div className="flex flex-col h-844">
                    <div className="absolute top-8 left-4">
                        <Link to="/home">
                            <img src="images/home.png" alt="Home" />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center w-full ">
                        <h2 className="text-3xl font-semibold mt-12 mb-10">Calendar</h2>
                    </div>
                    <div className=" mt-20 overflow-y-auto" >
                        {sortedActivities.map(([date, activities], index) => (

                            <div key={index} className="mt-30 flex flex-col gap-5">
                                <h3 className="ml-4 mb-1 font-semibold">{formatDate(date)}</h3>
                                {activities.map((activity, index) => (
                                    <ActivityCard key={index} activity={activity} />
                                ))}
                            </div>
                        ))}
                    </div>

                </div>

            </body>

            <NavMenu />

        </>
    )
};

export default CalendarPage;