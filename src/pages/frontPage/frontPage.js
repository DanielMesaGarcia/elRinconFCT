export default function FrontPage() {
  return (
    <div className="w-390 h-844 bg-grey">
      <h1 className="font-2xl">Hi Steve</h1>
      <h2 className="font-base">What would you like to do?</h2>
      <div className="grid-cols-14">
        <img src="/images/phys_act-icon.png" alt="" />
        <p>Physical</p>
        <img src="/images/arts-icon.png" alt="" />
        <p>Arts and crafts</p>
        <img src="/images/hangout-icon.png" alt="" />
        <p>Hangout</p>
        <img src="/images/food-icon.png" alt="" />
        <p>Food</p>
        <img src="/images/edu-icon.png" alt="" />
        <p>Education</p>
        <img src="/images/out_act-icon.png" alt="" />
        <p>Outdoors</p>
        <img src="/images/events-icon.png" alt="" />
        <p>Events</p>
      </div>
      <div className="absolute">
        <img className="w-330 h-534 rounded-2xl" src="/images/hangout.png" alt="" />
        <img src="/images/x-btn.png" alt="No"/>
        <img src="/images/check-icon.png" alt="Yes" />
      </div>
    </div>
  );
}
