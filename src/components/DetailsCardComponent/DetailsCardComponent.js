import React from "react";
import hangout from "../../assets/images/backgroundImgs/hangout.png"


const DetailsCardComponent = ({ activity }) =>{


    return(
        <>
         <div className="bg-white shadow-md rounded-lg p-6">
           <div
                style={{ backgroundImage: `url(${hangout})` }}
                className="h-250 bg-cover bg-center relative rounded-t-lg"
            >
                <p className="text-4xl font-gemunu font-extrabold  pl-4">{activity.name}</p>
          </div>
          <div className="flex">
          <div className="ml-20 mt-30 w-1/2 p-4">
            {/* Activity Description */}
            <div className="line-clamp-3 font-light">
              <p className="line-clamp-3">Date</p>
              <p className="text-24"> {activity.date}</p>
            </div><br></br>
            <div className="line-clamp-3 font-light">
              <p className="line-clamp-3">Time</p>
              <p className="text-24"> {activity.time}</p>
            </div><br></br>
            <div className="line-clamp-3 font-light">
              <p className="line-clamp-3">Location</p>
              <p className="text-24"> {activity.location}</p>
            </div><br></br>
            <div className="line-clamp-3 font-light">
              <p className="line-clamp-3">Description</p>
              <p className="text-24"> {activity.description}</p>
            </div><br></br>
            <div className="line-clamp-3 font-light">
              <p className="line-clamp-3">Experience level</p>
              <p className="text-24"> {activity.experience_level}</p>
            </div><br></br>
          </div>
          <div className="mr-20 mt-30 w-1/2 p-4">
            <div className="line-clamp-3 font-light">
              <p className="line-clamp-3">Attendees</p>
              <p className="text-24"> {activity.max_attendees}</p>
            </div>
          </div>
          </div>
         </div>
        </>
    );
}

export default DetailsCardComponent;