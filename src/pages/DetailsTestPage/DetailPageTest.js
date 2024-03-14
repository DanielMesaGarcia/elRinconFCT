import DetailsCardComponent from '../../components/DetailsCardComponent/DetailsCardComponent';
import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabaseClient';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

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
            <div className='flex flex-col h-63'>
                <div className="absolute top-8 left-4">
                    <Link to="/home">
                        <img src="assets/images/icons/back.svg" alt="Home" />
                    </Link>
                </div>
            </div>
            <div className='mt-20 overflow-y-auto'>
                {activity && <DetailsCardComponent activity={activity} />}
            </div>
            
        </>
    );
}

export default DetailsTestPage;
