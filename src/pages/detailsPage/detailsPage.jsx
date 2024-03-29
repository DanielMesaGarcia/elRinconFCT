import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabaseClient';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import DetailsCardComponent from '../../components/DetailsCardComponent/DetailsCardComponent';
import NavMenu from '../../components/navMenu';
import back from "../../assets/images/icons/back.svg"

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
                <div className="mt-40 absolute top-8 left-4">
                    <Link to="/home">
                        <img src={back} alt="Home" />
                    </Link>
                </div>
            </div>
            <div className='mt-88 overflow-y-auto'>
                {activity && <DetailsCardComponent activity={activity} />}
            </div>
            <NavMenu />
        </>
    );
}

export default DetailsTestPage;