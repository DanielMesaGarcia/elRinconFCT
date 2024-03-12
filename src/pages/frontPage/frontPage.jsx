import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

//components
import NavMenu from "../../components/navMenu";
import CategoryModal from "../../components/CategoryModalComponent/CategoryModalComponent";
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
import yes from "../../assets/images/icons/check-btn.svg"
import no from "../../assets/images/icons/x-btn.svg"
import settings from "../../assets/images/icons/settings.svg"

export default function FrontPage() {

  const [isOpen, setIsOpen] = useState(true);

  const closeHandler = () => {
    setIsOpen(false);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      name: 'Outdoor',
      subcategories: ['Hiking', 'Camping', 'Fishing', 'Cycling']
    },
    {
      name: 'Indoor',
      subcategories: ['Board Games', 'Cooking', 'Reading', 'Yoga']
    },
    {
      name: 'Water Activities',
      subcategories: ['Swimming', 'Surfing', 'Kayaking', 'Sailing']
    },
    {
      name: 'Team Sports',
      subcategories: ['Football', 'Basketball', 'Baseball', 'Volleyball']
    },
    // add more categories as needed
  ];

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
        <div className="flex flex-auto flex-nowrap overflow-x-auto gap-x-18 mb-20 mt-5 pb-4">
          {/* view all btn */}
          <CategoryBtn
            src={viewAll}
            alt="view all"
          />
          {/* physical btn */}
          <CategoryBtn
            src={physical}
            alt="physical"
          />
          {/* arts and crafts btn */}
          <CategoryBtn
            src={arts}
            alt="arts and crafts"
          />
          {/* outdoors btn */}
          <CategoryBtn
            src={outdoors}
            alt="outdoors"
          />
          {/* education btn */}
          <CategoryBtn
            src={edu}
            alt="education"
          />
          {/* food btn */}
          <CategoryBtn
            src={food}
            alt="food"
          />
          {/* hangout btn */}
          <CategoryBtn
            src={hangout}
            alt="hangout"
          />
          {/* events btn */}
          <CategoryBtn
            src={events}
            alt="events"
          />
        </div>
        {/* event card */}
        <div
          style={{ "background-image": `url(${hangoutBg})` }}
          className="h-534 mb-80 bg-cover bg-center relative rounded-2xl"
        >
          <p className="text-4xl font-gemunu font-extrabold  pl-8">
            Board game night
          </p>
          {/* YES btn */}
          <CategoryBtn
            className="z-10 absolute right-5 bottom-5"
            src={yes}
            alt="yes"
          />
          {/* NO btn */}
          <CategoryBtn
            className="z-10 absolute left-5 bottom-5"
            src={no}
            alt="no"
          />
        </div>
      </div>
      <NavMenu />
    </>
  );
}
