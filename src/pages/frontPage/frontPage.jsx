import { useEffect, useState } from "react";
import React from "react";
import { supabase } from "../../services/supabaseClient";

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
import settings from "../../assets/images/icons/settings.svg"

export default function FrontPage() {



  // CATEGORY VARIABLES
  // State for controlling the visibility of the category modal
  const [isOpen, setIsOpen] = useState(false);

  // State for storing the categories
  const [categories, setCategories] = useState([]);

  // Effect hook to fetch the categories from the database when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*');

      // If there's an error, log it
      if (error) {
        console.error('Error fetching categories:', error);
      } else {
        // If there's no error, update the state with the fetched categories
        setCategories(data);
      }
    };

    // Call the fetchCategories function
    fetchCategories();
  }, []);

  // Function to close the category modal
  const closeHandler = () => {
    setIsOpen(false);
  };

  // State for storing the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // State for storing the selected subcategories
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  // Function to handle changes to the selected subcategories
  const handleSubcategoriesChange = (subcategories) => {
    setSelectedSubcategories(subcategories);
  };



  useEffect(() => {

    async function fetchData() {
      const { data, error } = await supabase.from('categories').select()

      if (error) {
        console.error('Error fetching categories:', error)
        return
      }
      setCategories(data)
    }
    fetchData()
  }, [])


  //SWIPE VARIABLES
  const [activities, setActivities] = useState([]);
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState('');
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
        .select('*')
        .eq('email', localStorage.getItem('currentUser'));

      if (error) {
        throw error;
      }
      setUserData(data)
      const filteredData = data.filter(item => item.email === localStorage.getItem('currentUser'));

      setUserName(data[0].email)



      let signedEvents;

      if (filteredData.length > 0 && filteredData[0].signedEvents !== null) {
        signedEvents = filteredData[0].signedEvents;
      }else{
        signedEvents=[];
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




  //Function to add clicked activity to signedEvents array in userTable
  const handleYesClick = async (clickedActivity) => {
    let signedEventsLocal = JSON.parse(localStorage.getItem('signedEventsLocal')) || [];
    signedEventsLocal.push(clickedActivity.id);
    localStorage.setItem('signedEventsLocal', JSON.stringify(signedEventsLocal));

    try {
      // Update the 'signedEvents' array in the 'userTable' of Supabase
      const { error } = await supabase
        .from('userTable')
        .update({ signedEvents: signedEventsLocal })
        .eq('email', localStorage.getItem('currentUser'));

      if (error) {
        throw error;
      }

    } catch (error) {
      console.error('Error updating signedEvents array in userTable:', error.message);
      // Handle the error accordingly, e.g., show an error message to the user
    }
  };



  //FILTERING ACTIVITIES

  // State for storing the swipe components
  const [swipeComponents, setSwipeComponents] = useState([]);

  // Effect hook to load the selected subcategories from local storage when the component mounts
  useEffect(() => {
    const storedSubcategories = localStorage.getItem('selectedSubcategories');
    // If there are stored subcategories, parse them and set the state
    if (storedSubcategories) {
      setSelectedSubcategories(JSON.parse(storedSubcategories));
    }
  }, []);

  // Effect hook to update the swipe components when the selected subcategories or activities change
  useEffect(() => {
    let swipeComponents;

    // If there are selected subcategories, filter the activities based on them
    if (selectedSubcategories.length > 0) {
      const filteredActivities = activities.filter(activity =>
        selectedSubcategories.some(subcategory => subcategory === activity.name)
      );
      // Map the filtered activities to SwipeComponent elements
      swipeComponents = filteredActivities.map(activity => <SwipeComponent key={activity.id} activity={activity} removeActivity={removeActivity} handleYesClick={() => handleYesClick(activity)} />);
    } else {
      // If there are no selected subcategories, map all activities to SwipeComponent elements
      swipeComponents = activities.map(activity => <SwipeComponent key={activity.id} activity={activity} removeActivity={removeActivity} handleYesClick={() => handleYesClick(activity)} />);
    }

    // Update the state with the new swipe components
    setSwipeComponents(swipeComponents);
  }, [selectedSubcategories, activities]);

  // Filter the activities based on the selected subcategories
  const filteredActivities = activities.filter(activity =>
    selectedSubcategories.some(subcategory => subcategory === activity.name)
  );

  // Log the filtered activities and all activities for debugging
  console.log(filteredActivities);
  console.log(activities);

  return (
    <>
      <CategoryModal categories={categories} handleSubcategoriesChange={handleSubcategoriesChange} setCategory={setSelectedCategory} isOpen={isOpen} onClose={closeHandler} />
      {/* the whole screen */}
      <div className="px-20 relative">
        {/* settings btn */}
        <CategoryBtn
          className="pt-40 absolute right-40"
          src={settings} />
        {/* text */}
        <h1 className="text-3xl pt-40">Hi, {userName} </h1>
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
          {swipeComponents}
        </div>
      </div>
      <NavMenu />
    </>
  );
}


