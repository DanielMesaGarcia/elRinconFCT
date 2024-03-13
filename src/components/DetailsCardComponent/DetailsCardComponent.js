import React from "react";
import out_act from "../../assets/images/background imgs/out_act.png";


const DetailsCardComponent = ({ activity }) =>{


    return(
        <>
         <div className="bg-white shadow-md rounded-lg p-6">
           <h2 className="text-xl font-bold mb-2">{activity.name}</h2>
           <div
                style={{ "background-image": `url(${out_act})` }}
                className="h-388 bg-cover bg-center relative rounded-t-lg"
            >
                <p className="text-4xl font-gemunu font-extrabold  pl-4">{activity.name}</p>
          </div>
          <p className="text-sm text-gray-500">Date {activity.date}</p>
           <p className="text-gray-600 mb-4">{activity.time}</p>
          
           <p className="text-sm text-gray-500">Location: {activity.location}</p>
         </div>
        </>
    );
}

export default DetailsCardComponent;