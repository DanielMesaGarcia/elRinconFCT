import React from "react";
import out_act from "../assets/images/out_act.png";


const DetailsCardComponent = ({ activity }) =>{


    return(
        <>
         <div className="bg-white shadow-md rounded-lg p-6">
           <h2 className="text-xl font-bold mb-2">{activity.name}</h2>
           <div className="pt-9 flex flex-row justify-center
            w-330 h-383 bg-cover bg-center relative rounded-2xl mx-5"
            style={{ "background-image": `url(${out_act})` }}>
             <p className="text-4xl text-black mx-5 font-gemunu">Board game night</p>
           </div>

           <p className="text-gray-600 mb-4">{activity.time}</p>
           <p className="text-sm text-gray-500">Date: {activity.location}</p>
         </div>
        </>
    );
}

export default DetailsCardComponent;