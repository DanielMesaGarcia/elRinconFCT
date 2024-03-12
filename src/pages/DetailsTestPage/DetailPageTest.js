import DetailsCardComponent from '../../components/DetailsCardComponent/DetailsCardComponent';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { supabase } from '../../services/supabaseClient';
import { useParams } from 'react-router-dom';

const DetailsTestPage = () =>{
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetchActivities();
    }, []);

    const id=useParams();

    const fetchActivities = async () => {
        let { data: activities, error } = await supabase.from('activities').select('*');
        if (error) console.log("Error fetching activities: ", error);
        else setActivities(activities);
    };

    return(
        <>
         {activities.map((activity, index) => (
                                    <DetailsCardComponent activity={activity} />
                                ))}
        </>
    );
}

export default DetailsTestPage;
