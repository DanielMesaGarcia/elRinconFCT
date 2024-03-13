import React from "react";
import out_act from "../../assets/images/backgroundImgs/out_act.png"


const DetailsCardComponent = ({ activity }) =>{


    return(
        <>
         <div className="bg-white shadow-md rounded-lg p-6">
           <div
                style={{ backgroundImage: `url(${out_act})` }}
                className="h-250 bg-cover bg-center relative rounded-t-lg"
            >
                <p className="text-4xl font-gemunu font-extrabold  pl-4">{activity.name}</p>
          </div>
          <div className="flex">
          <div className="ml-20 mt-30 w-1/2 p-4">
            {/* Activity Description */}
            <div className="">
              <p className="line-clamp-3 font-light text-10">Date</p>
              <p className="font-medium text-20"> {activity.date}</p>
            </div><br></br>
            <div className="line-clamp-3 font-light text-10">
              <p className="line-clamp-3">Time</p>
              <p className="font-medium text-20"> {activity.time}</p>
            </div><br></br>
            <div className="line-clamp-3 font-light text-10">
              <p className="line-clamp-3">Location</p>
              <p className="font-medium text-20"> {activity.location}</p>
            </div><br></br>
            <div className="line-clamp-3 font-light text-10">
              <p className="line-clamp-3">Experience level</p>
              <p className="font-medium text-20"> {activity.experience_level}</p>
            </div><br></br>
          </div>
          <div className="ml-20 mt-30 w-1/2 p-4">
            <div className="line-clamp-3 font-light text-10">
              <p className="line-clamp-3">Attendees</p>
              <p className="font-medium text-20"> {activity.max_attendees}</p>
            </div><br></br>
          </div>
          </div>
         </div>
        </>
    );
}

export default DetailsCardComponent;