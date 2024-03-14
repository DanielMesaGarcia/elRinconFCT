import { Link } from "react-router-dom";

import calendarIcon from "../assets/images/icons/calendar.svg"
import calendarFocus from "../assets/images/icons/calendar-focus.svg"
import browseIcon from "../assets/images/icons/browse.svg"
import browseFocus from "../assets/images/icons/browse-focus.svg"
import addIcon from "../assets/images/icons/add.svg"
import addFocus from "../assets/images/icons/add-focus.svg"

export default function NavMenu({page}) {
  return (
    <div className="relative">
        <div className="px-40 fixed bottom-0 left-0 right-0 rounded-t-xl bg-white flex justify-between py-12 z-20">
            <Link to="/calendarPage">
                <img
                    src= {page === "calendar" ? calendarFocus : calendarIcon}
                    alt="calendar"
                />
            </Link>
            <Link to="/home">
                <img
                    src={page === "browse" ? browseFocus : browseIcon}
                    alt="browse"
                />
            </Link>
            <Link to="/createPage">
                <img
                    src={page === "add" ? addFocus : addIcon}
                    alt="add"
                />
            </Link>
        </div>
    </div>
  );
}
