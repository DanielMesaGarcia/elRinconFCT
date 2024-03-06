
export default function FrontPage() {
  return (
    <div className="w-390 h-844 bg-grey">
      <h1 className="font-2xl">Hi Steve</h1>
      <h2 className="font-base">What would you like to do?</h2>
      <div className="flex">
        <img src="/images/phys_act-icon.png" alt="physical activity" />
        <img src="/images/arts-icon.png" alt="arts and crafts" />
        <img src="/images/hangout-icon.png" alt="hangout" />
        <img src="/images/food-icon.png" alt="food" />
        <img src="/images/edu-icon.png" alt="education" />
        <img src="/images/out_act-icon.png" alt="outdoor activities" />
        <img src="/images/events-icon.png" alt="events" />
      </div>
      <div>
        <img className="w-330 h-534 rounded-2xl" src="/images/hangout.png" alt="" />
      </div>
      <div className="flex bg-white">
        <img src="/images/calendar.png" alt="calendar" />
        <img src="/images/browse.png" alt="browse" />
        <img src="/images/add.png" alt="create event" />
      </div>
    </div>
  );
}
