import { useEffect, useState } from "react";
import React from "react";
import { createClient } from "@supabase/supabase-js"

//components
import NavMenu from "../../components/navMenu";
import CategoryModal from "../../components/CategoryModalComponent/CategoryModalComponent";
import SwipeComponent from "../../components/SwipeComponent/SwipeComponent";
import CategoryBtn from "../../components/CategoryBtns/CategoryBtns";

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
  const [categories, setCategories] = useState([])
  const closeHandler = () => {
    setIsOpen(false);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const supabase = createClient('https://uxsdmotmwzaccowffkrm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4c2Rtb3Rtd3phY2Nvd2Zma3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTU1MTAsImV4cCI6MjAyNTI5MTUxMH0.PMwkeGXq2Tfbe4GBJ5zVOfXVIh6lZP5_5jDpi-u87SQ')

  useEffect(()=> {

    async function fetchData(){
      const {data, error} = await supabase.from('categories').select()
  
      if (error) {
        console.error('Error fetching categories:', error)
        return
      }
      console.log('Fetched data:', data)
      setCategories(data)
    }
    fetchData()
  }, [])

  console.log(isOpen)
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
            setIsOpen={setIsOpen}
            isOpen={isOpen}
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
        </div>
        {/* swipe card */}
        <div className="relative">
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