import DetailsCardComponent from '../../components/DetailsCardComponent/DetailsCardComponent';
import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabaseClient';
import { useParams } from 'react-router-dom';

const DetailsTestPage = () =>{
    const [activity, setActivity] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchActivity();
    }, [id]);

    const fetchActivity = async () => {
        let { data: activities, error } = await supabase
            .from('activities')
            .select('*')
            .eq('id', id)
            .single();
        if (error) {
            console.log("Error fetching activity: ", error.message);
        } else {
            setActivity(activities);
        }
    };

    return(
        <>
            {activity && <DetailsCardComponent activity={activity} />}
        </>
    );
}

export default DetailsTestPage;
