import { Link } from "react-router-dom";


export default function NavMenu() {
  return (
    <div className="relative">
        <div className="fixed bottom-0 left-0 right-0 bg-white flex justify-between py-12 z-20">
            <Link to="/calendarPage">
            <button className="pl-20">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1V5M14 1V5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 9H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            </Link>
            <Link to="/home">
            <button>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L14.3333 14.3333M1 8.77778C1 9.79917 1.20118 10.8106 1.59205 11.7542C1.98292 12.6978 2.55582 13.5553 3.27806 14.2775C4.00029 14.9997 4.85771 15.5726 5.80135 15.9635C6.745 16.3544 7.75639 16.5556 8.77778 16.5556C9.79917 16.5556 10.8106 16.3544 11.7542 15.9635C12.6978 15.5726 13.5553 14.9997 14.2775 14.2775C14.9997 13.5553 15.5726 12.6978 15.9635 11.7542C16.3544 10.8106 16.5556 9.79917 16.5556 8.77778C16.5556 7.75639 16.3544 6.745 15.9635 5.80135C15.5726 4.85771 14.9997 4.00029 14.2775 3.27806C13.5553 2.55582 12.6978 1.98292 11.7542 1.59205C10.8106 1.20118 9.79917 1 8.77778 1C7.75639 1 6.745 1.20118 5.80135 1.59205C4.85771 1.98292 4.00029 2.55582 3.27806 3.27806C2.55582 4.00029 1.98292 4.85771 1.59205 5.80135C1.20118 6.745 1 7.75639 1 8.77778Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            </Link>
            <Link to="/createPage">
            <button className="pr-20">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1V21M1 11H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            </Link>
        </div>
    </div>
  );
}
