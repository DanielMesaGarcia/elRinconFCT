export default function FrontPage() {
  return (
    <div className="w-390 h-844 bg-grey">
      <h1 className="font-2xl">Hi Steve</h1>
      <h2 className="font-base">What would you like to do?</h2>
      <div className="flex-nowrap">
        <div><img src="/images/phys_act-icon.png" alt="" /></div>
        <div><p>Physical</p></div>
        <div><img src="/images/arts-icon.png" alt="" /></div>
        <div><p>Arts and crafts</p></div>
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
        <img className="w-330 h-534 rounded-2xl flex" src="/images/hangout.png" alt="">
        <button>
          <svg width="63" height="60" viewBox="0 0 63 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="63" height="60" rx="16" fill="#373737"/>
            <path d="M43.5 18L19.5 42M19.5 18L43.5 42" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button>
          <svg width="63" height="60" viewBox="0 0 63 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="63" height="60" rx="16" fill="#373737"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M47.3744 18.7393C47.8473 19.2124 48.1129 19.8538 48.1129 20.5226C48.1129 21.1915 47.8473 21.8329 47.3744 22.3059L28.4686 41.2118C28.2188 41.4617 27.9222 41.6599 27.5957 41.7951C27.2692 41.9304 26.9193 42 26.5659 42C26.2126 42 25.8627 41.9304 25.5362 41.7951C25.2097 41.6599 24.9131 41.4617 24.6633 41.2118L15.27 31.8202C15.0291 31.5875 14.837 31.3092 14.7048 31.0015C14.5726 30.6937 14.503 30.3628 14.5001 30.0279C14.4972 29.6929 14.561 29.3608 14.6878 29.0508C14.8147 28.7408 15.0019 28.4592 15.2388 28.2224C15.4756 27.9855 15.7572 27.7982 16.0672 27.6714C16.3772 27.5446 16.7093 27.4808 17.0443 27.4837C17.3792 27.4866 17.7102 27.5562 18.0179 27.6884C18.3256 27.8206 18.604 28.0127 18.8366 28.2536L26.5651 35.9821L43.8062 18.7393C44.0404 18.505 44.3185 18.319 44.6247 18.1922C44.9308 18.0653 45.2589 18 45.5903 18C45.9217 18 46.2498 18.0653 46.5559 18.1922C46.8621 18.319 47.1402 18.505 47.3744 18.7393Z" fill="white"/>
          </svg>
        </button>
        </img>
      </div>
    </div>
  );
}