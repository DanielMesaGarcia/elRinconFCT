import calendar from "../../images/calendar.png";
import browse from "../../images/browse.png";
import add from "../../images/add.png";
import hangoutCard from "../../images/hangout.png";
import phys_act from "../../images/phys_act-icon.png";
import arts from "../../images/arts-icon.png";
import hangout from "../../images/hangout-icon.png";
import food from "../../images/food-icon.png";
import edu from "../../images/edu-icon.png";
import out_act from "../../images/out_act-icon.png";
import events from "../../images/events-icon.png";

export default function FrontPage() {
  return (
    <div className="w-390 h-844 bg-grey">
      <h1 className="font-2xl">Hi Steve</h1>
      <h2 className="font-base">What would you like to do?</h2>
      <div className="flex">
        <img src={phys_act} alt="physical activity" />
        <img src={arts} alt="arts and crafts" />
        <img src={hangout} alt="hangout" />
        <img src={food} alt="food" />
        <img src={edu} alt="education" />
        <img src={out_act} alt="outdoor activities" />
        <img src={events} alt="events" />
      </div>
      <div>
        <img className="w-330 h-534 rounded-2xl" src={hangoutCard} alt="" />
      </div>
      <div className="flex bg-white">
        <img src={calendar} alt="calendar" />
        <img src={browse} alt="browse" />
        <img src={add} alt="create event" />
      </div>
    </div>
  );
}