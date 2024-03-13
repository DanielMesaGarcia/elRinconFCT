import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useState } from "react";
import React from "react";
import { supabase } from "../../services/supabaseClient";
import { createClient } from "@supabase/supabase-js"

//components
import NavMenu from "../../components/navMenu";
import CategoryModal from "../../components/CategoryModalComponent/CategoryModalComponent";
import SwipeComponent from "../../components/SwipeComponent/SwipeComponent";
import CategoryBtn from "../../components/CategoryBtns/CategoryBtns";
import EventCard from "../../components/EventCard/EventCard";

//icons for categories
import viewAll from "../../assets/images/grey cat/view_all-icon.svg"
import physical from "../../assets/images/grey cat/physical-grey.svg"
import arts from "../../assets/images/grey cat/arts-grey.svg"
import outdoors from "../../assets/images/grey cat/outdoors-grey.svg"
import edu from "../../assets/images/grey cat/edu-grey.svg"
import food from "../../assets/images/grey cat/food-grey.svg"
import hangout from "../../assets/images/grey cat/hangout-grey.svg"
import events from "../../assets/images/grey cat/events-grey.svg"

//other images/icons
import hangoutBg from "../../assets/images/background imgs/hangout.png"
import settings from "../../assets/images/icons/settings.svg"

export default function FrontPage() {



  // CATEGORY VARIABLES
  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => {
    setIsOpen(false);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const supabase = createClient('https://uxsdmotmwzaccowffkrm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4c2Rtb3Rtd3phY2Nvd2Zma3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTU1MTAsImV4cCI6MjAyNTI5MTUxMH0.PMwkeGXq2Tfbe4GBJ5zVOfXVIh6lZP5_5jDpi-u87SQ')
  const categories = 'categories'
  async function fetchData(){
    const {data, error} = await supabase.from(categories).select()

    if (error) {
      console.error('Error fetchign data:', error)
      return
    }
    console.log('Fetched data:', data)
  }
  fetchData()


  //SWIPE VARIABLES
  const [activities, setActivities] = useState([]);
  const [userData, setUserData] = useState([]);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  const removeActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  const fetchActivities = async () => {
    try {
      const signedEventsLocal = JSON.parse(localStorage.getItem('signedEventsLocal')) || [];
      const { data, error } = await supabase
        .from('activities')
        .select('*');
      if (error) {
        throw error;
      }
      const filteredActivities = data.filter(activity => !signedEventsLocal.includes(activity.id));
      setActivities(filteredActivities);

    } catch (error) {
      console.error('Error fetching activities:', error.message);
    }
  };


  const fetchUserData = async () => {
    try {
      const { data, error } = await supabase
        .from('userTable')
        .select('*');


      if (error) {
        throw error;
      }
      setUserData(data)
      const filteredData = data.filter(item => item.email === localStorage.getItem('currentUser'));

      let signedEvents = [];
      if (filteredData.length > 0 && filteredData[0].signedEvents !== null) {
        signedEvents = filteredData[0].signedEvents.map(Number);
      }

      // Store the converted array in local storage
      localStorage.setItem('signedEventsLocal', JSON.stringify(signedEvents));


    } catch (error) {
      console.error('Error fetching activities:', error.message);
    }
  };


  useEffect(() => {
    fetchUserData().then(() => {
      fetchActivities();
    });
  }, []);

  const handleYesClick = async () => {
    const signedEvent = activities[currentActivityIndex];
    let signedEventsLocal = JSON.parse(localStorage.getItem('signedEventsLocal')) || [];
    signedEventsLocal.push(signedEvent.id);
    localStorage.setItem('signedEventsLocal', JSON.stringify(signedEventsLocal));

    try {

      // Update the 'signedEvents' array in the 'userTable' of Supabase
      const { data, error } = await supabase
        .from('userTable')
        .update({ signedEvents: signedEventsLocal })
        .eq('email', localStorage.getItem('currentUser'));

      if (error) {
        throw error;
      }
      console.log('Supabase response:', data);

      setCurrentActivityIndex((prevIndex) => prevIndex + 1);
    } catch (error) {
      console.error('Error updating signedEvents array in userTable:', error.message);
      // Handle the error accordingly, e.g., show an error message to the user
    }
  };

  return (




    <>
      <CategoryModal categories={categories} setCategory={setSelectedCategory} isOpen={isOpen} onClose={closeHandler} />
      {/* the whole screen */}
      <div className="px-20 relative">
        {/* settings btn */}
        <CategoryBtn
          className="pt-40 absolute right-40"
          src={settings}/>
        {/* text */}
        <h1 className="text-3xl pt-40">Hi Steve</h1>
        <h2 className="text-xl mb-20">What would you like to do?</h2>
        {/* category buttons */}
        <div className="flex overflow-x-auto gap-x-18 mb-20 mt-5 pb-4">
          {/* view all btn */}
          <CategoryBtn
            src={viewAll}
            alt="view all"
            className="min-w-48 pb-8"
          />
          {/* physical btn */}
          <CategoryBtn
            src={physical}
            alt="physical"
            className="min-w-48 pb-8"
          />
          {/* arts and crafts btn */}
          <CategoryBtn
            src={arts}
            alt="arts and crafts"
            className="min-w-48 pb-8"
          />
          {/* outdoors btn */}
          <CategoryBtn
            src={outdoors}
            alt="outdoors"
            className="min-w-48 pb-8"
          />
          {/* education btn */}
          <CategoryBtn
            src={edu}
            alt="education"
            className="min-w-48 pb-8"
          />
          {/* food btn */}
          <CategoryBtn
            src={food}
            alt="food"
            className="min-w-48 pb-8"
          />
          {/* hangout btn */}
          <CategoryBtn
            src={hangout}
            alt="hangout"
            className="min-w-48 pb-8"
          />
          {/* events btn */}
          <CategoryBtn
            src={events}
            alt="events"
            className="min-w-48 pb-8"
          />
          <button className="border-none bg-grey">
            <svg
              width="48"
              height="60"
              viewBox="0 0 48 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="8" fill="#F8EFA6" />
              <path
                d="M40.128 12C40.9428 12 41.7242 12.3237 42.3003 12.8998C42.8764 13.4759 43.2 14.2573 43.2 15.072V18.4896C43.1999 18.9456 43.0729 19.3925 42.8332 19.7804C42.5935 20.1683 42.2507 20.4819 41.843 20.6861L41.7024 20.7514C41.0178 21.0413 40.432 21.5236 40.0162 22.14C39.6004 22.7563 39.3724 23.48 39.3599 24.2234C39.3473 24.9668 39.5508 25.6978 39.9457 26.3278C40.3405 26.9578 40.9097 27.4596 41.5842 27.7724L41.7378 27.84C42.1704 28.0184 42.5403 28.3212 42.8006 28.71C43.0609 29.0989 43.2 29.5563 43.2 30.0242V33.504C43.2 34.3187 42.8764 35.1001 42.3003 35.6762C41.7242 36.2523 40.9428 36.576 40.128 36.576H7.87205C7.0573 36.576 6.27593 36.2523 5.69982 35.6762C5.1237 35.1001 4.80005 34.3187 4.80005 33.504V30.23C4.80005 29.2301 5.35685 28.3185 6.23544 27.8592L6.37675 27.7901C7.03882 27.492 7.60285 27.0124 8.00343 26.4068C8.40401 25.8013 8.62473 25.0946 8.64 24.3686C8.65528 23.6427 8.46447 22.9274 8.08972 22.3055C7.71497 21.6836 7.17162 21.1807 6.52267 20.855L6.36907 20.7821C5.90186 20.5723 5.50521 20.2321 5.22685 19.8022C4.94849 19.3723 4.80028 18.8712 4.80005 18.359V15.072C4.80005 14.2573 5.1237 13.4759 5.69982 12.8998C6.27593 12.3237 7.0573 12 7.87205 12H40.128ZM40.0989 14.6496H7.90123C7.69755 14.6496 7.5022 14.7305 7.35817 14.8745C7.21415 15.0186 7.13323 15.2139 7.13323 15.4176V17.8115C8.33938 18.4099 9.35442 19.3332 10.064 20.4775C10.7735 21.6218 11.1493 22.9416 11.1491 24.288C11.1493 25.6345 10.7733 26.9543 10.0636 28.0986C9.35396 29.2429 8.33876 30.1663 7.13246 30.7645V33.1584C7.13246 33.3621 7.21338 33.5574 7.35741 33.7015C7.50143 33.8455 7.69678 33.9264 7.90046 33.9264H40.0989C40.3026 33.9264 40.4979 33.8455 40.6419 33.7015C40.786 33.5574 40.8669 33.3621 40.8669 33.1584V30.7645C39.6607 30.1661 38.6457 29.2428 37.9361 28.0985C37.2266 26.9542 36.8508 25.6344 36.851 24.288C36.8508 22.9415 37.2268 21.6217 37.9365 20.4774C38.6461 19.3331 39.6613 18.4097 40.8676 17.8115V15.4176C40.8676 15.2139 40.7867 15.0186 40.6427 14.8745C40.4987 14.7305 40.3026 14.6496 40.0989 14.6496ZM32.448 28.128C33.0591 28.128 33.6451 28.3707 34.0772 28.8028C34.5093 29.2349 34.752 29.8209 34.752 30.432C34.752 31.0431 34.5093 31.6291 34.0772 32.0612C33.6451 32.4933 33.0591 32.736 32.448 32.736C31.837 32.736 31.251 32.4933 30.8189 32.0612C30.3868 31.6291 30.144 31.0431 30.144 30.432C30.144 29.8209 30.3868 29.2349 30.8189 28.8028C31.251 28.3707 31.837 28.128 32.448 28.128ZM32.448 21.984C33.0591 21.984 33.6451 22.2267 34.0772 22.6588C34.5093 23.0909 34.752 23.6769 34.752 24.288C34.752 24.8991 34.5093 25.4851 34.0772 25.9172C33.6451 26.3493 33.0591 26.592 32.448 26.592C31.837 26.592 31.251 26.3493 30.8189 25.9172C30.3868 25.4851 30.144 24.8991 30.144 24.288C30.144 23.6769 30.3868 23.0909 30.8189 22.6588C31.251 22.2267 31.837 21.984 32.448 21.984ZM32.448 15.84C33.0591 15.84 33.6451 16.0827 34.0772 16.5148C34.5093 16.9469 34.752 17.5329 34.752 18.144C34.752 18.7551 34.5093 19.3411 34.0772 19.7732C33.6451 20.2053 33.0591 20.448 32.448 20.448C31.837 20.448 31.251 20.2053 30.8189 19.7732C30.3868 19.3411 30.144 18.7551 30.144 18.144C30.144 17.5329 30.3868 16.9469 30.8189 16.5148C31.251 16.0827 31.837 15.84 32.448 15.84Z"
                fill="black"
              />
              <path
                d="M11.7045 58V52.1818H15.2159V52.8068H12.4091V54.7727H15.0341V55.3977H12.4091V57.375H15.2614V58H11.7045ZM19.9631 53.6364L18.3494 58H17.6676L16.054 53.6364H16.7812L17.9858 57.1136H18.0312L19.2358 53.6364H19.9631ZM22.5213 58.0909C22.1009 58.0909 21.7382 57.9981 21.4332 57.8125C21.1302 57.625 20.8963 57.3636 20.7315 57.0284C20.5687 56.6913 20.4872 56.2992 20.4872 55.8523C20.4872 55.4053 20.5687 55.0114 20.7315 54.6705C20.8963 54.3277 21.1255 54.0606 21.419 53.8693C21.7145 53.6761 22.0592 53.5795 22.4531 53.5795C22.6804 53.5795 22.9048 53.6174 23.1264 53.6932C23.348 53.7689 23.5497 53.892 23.7315 54.0625C23.9134 54.2311 24.0582 54.4545 24.1662 54.733C24.2741 55.0114 24.3281 55.3542 24.3281 55.7614V56.0455H20.9645V55.4659H23.6463C23.6463 55.2197 23.5971 55 23.4986 54.8068C23.402 54.6136 23.2637 54.4612 23.0838 54.3494C22.9058 54.2377 22.6955 54.1818 22.4531 54.1818C22.1861 54.1818 21.955 54.2481 21.7599 54.3807C21.5668 54.5114 21.4181 54.6818 21.3139 54.892C21.2098 55.1023 21.1577 55.3277 21.1577 55.5682V55.9545C21.1577 56.2841 21.2145 56.5634 21.3281 56.7926C21.4437 57.0199 21.6037 57.1932 21.8082 57.3125C22.0128 57.4299 22.2505 57.4886 22.5213 57.4886C22.6974 57.4886 22.8565 57.464 22.9986 57.4148C23.1425 57.3636 23.2666 57.2879 23.3707 57.1875C23.4749 57.0852 23.5554 56.9583 23.6122 56.8068L24.2599 56.9886C24.1918 57.2083 24.0772 57.4015 23.9162 57.5682C23.7552 57.733 23.5563 57.8617 23.3196 57.9545C23.0829 58.0455 22.8168 58.0909 22.5213 58.0909ZM26.0185 55.375V58H25.348V53.6364H25.9957V54.3182H26.0526C26.1548 54.0966 26.3101 53.9186 26.5185 53.7841C26.7268 53.6477 26.9957 53.5795 27.3253 53.5795C27.6207 53.5795 27.8793 53.6402 28.1009 53.7614C28.3224 53.8807 28.4948 54.0625 28.6179 54.3068C28.741 54.5492 28.8026 54.8561 28.8026 55.2273V58H28.1321V55.2727C28.1321 54.9299 28.0431 54.6629 27.8651 54.4716C27.687 54.2784 27.4427 54.1818 27.1321 54.1818C26.9181 54.1818 26.7268 54.2282 26.5582 54.321C26.3916 54.4138 26.2599 54.5492 26.1634 54.7273C26.0668 54.9053 26.0185 55.1212 26.0185 55.375ZM31.9254 53.6364V54.2045H29.6641V53.6364H31.9254ZM30.3232 52.5909H30.9936V56.75C30.9936 56.9394 31.0211 57.0814 31.076 57.1761C31.1328 57.2689 31.2048 57.3314 31.2919 57.3636C31.3809 57.3939 31.4747 57.4091 31.5732 57.4091C31.647 57.4091 31.7076 57.4053 31.755 57.3977C31.8023 57.3883 31.8402 57.3807 31.8686 57.375L32.005 57.9773C31.9595 57.9943 31.8961 58.0114 31.8146 58.0284C31.7332 58.0473 31.63 58.0568 31.505 58.0568C31.3156 58.0568 31.13 58.0161 30.9482 57.9347C30.7682 57.8532 30.6186 57.7292 30.4993 57.5625C30.3819 57.3958 30.3232 57.1856 30.3232 56.9318V52.5909ZM35.9467 54.6136L35.3445 54.7841C35.3066 54.6837 35.2507 54.5862 35.1768 54.4915C35.1049 54.3949 35.0064 54.3153 34.8814 54.2528C34.7564 54.1903 34.5964 54.1591 34.4013 54.1591C34.1342 54.1591 33.9117 54.2206 33.7337 54.3438C33.5575 54.465 33.4695 54.6193 33.4695 54.8068C33.4695 54.9735 33.5301 55.1051 33.6513 55.2017C33.7725 55.2983 33.9619 55.3788 34.2195 55.4432L34.8672 55.6023C35.2573 55.697 35.5481 55.8419 35.7393 56.0369C35.9306 56.2301 36.0263 56.4792 36.0263 56.7841C36.0263 57.0341 35.9543 57.2576 35.8104 57.4545C35.6683 57.6515 35.4695 57.8068 35.2138 57.9205C34.9581 58.0341 34.6607 58.0909 34.3217 58.0909C33.8767 58.0909 33.5083 57.9943 33.2166 57.8011C32.925 57.608 32.7403 57.3258 32.6626 56.9545L33.299 56.7955C33.3596 57.0303 33.4742 57.2064 33.6428 57.3239C33.8132 57.4413 34.0357 57.5 34.3104 57.5C34.6229 57.5 34.871 57.4337 35.0547 57.3011C35.2403 57.1667 35.3331 57.0057 35.3331 56.8182C35.3331 56.6667 35.2801 56.5398 35.174 56.4375C35.0679 56.3333 34.9051 56.2557 34.6854 56.2045L33.9581 56.0341C33.5585 55.9394 33.2649 55.7926 33.0774 55.5938C32.8918 55.393 32.799 55.142 32.799 54.8409C32.799 54.5947 32.8681 54.3769 33.0064 54.1875C33.1465 53.9981 33.3369 53.8494 33.5774 53.7415C33.8198 53.6335 34.0945 53.5795 34.4013 53.5795C34.8331 53.5795 35.1721 53.6742 35.4183 53.8636C35.6664 54.053 35.8426 54.303 35.9467 54.6136Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        {/* swipe card */}
        <div className="relative h-350">
          {activities.map((activity, index) => (
            <SwipeComponent
              key={activity.id}
              activity={activity}
              removeActivity={removeActivity}
              handleYesClick={handleYesClick}
              className={`absolute top-0 left-0 ${index !== 0 ? 'opacity-0' : ''}`}
            />
          ))}
        </div>
      </div>
      <NavMenu />
    </>
  );
}