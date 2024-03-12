import hangout from "../../assets/images/hangout.png";
import NavMenu from "../../components/navMenu";

<<<<<<< HEAD
export default function MatchPage() {
  return (
    <>
        {/* the whole screen */}
        <div className="h-844 px-40 bg-grey ">
            {/* match text */}
            <h1 className="text-3xl font-fira pt-110 pb-60 flex flex-row justify-center">
                You've got a match!
            </h1>
            {/* event card */}
            <div
                style={{ "background-image": `url(${hangout})` }}
                className="h-388 bg-cover bg-center relative rounded-2xl"
            >
                <p className="text-4xl font-gemunu font-extrabold  pl-4">Board game night</p>
            </div>
            {/* add to calendar btn */}
            <div className="flex justify-center pt-40">
                <button className="bg-darkGrey text-white w-310 h-60 rounded-2xl font-fira">
                    Add to calendar
                </button>
            </div>
            {/* no thanks btn */}
            <div className="flex justify-center">
                <button className="font-fira text-base pt-40 flex flex-row justify-center">No thanks</button>
=======
export default function MatchPage(){
    return(
        <div className="h-844 bg-grey px-20 " >
            <div className="flex flex-row justify-center">
            <h1 className="text-3xl pt-123 flex flex-row justify-center">You've got a match!</h1>
            {/* <h1 className="font-2xl pt-20 flex flex-row justify-center text-xl">You've got a match!</h1> */}
            </div>
            <div className="pt-9 flex flex-row justify-center
            w-330 h-383 bg-cover bg-center relative rounded-2xl mx-5"
            style={{ "background-image": `url(${hangout})` }}>
                <p className="text-4xl text-black mx-5 font-gemunu">Board game night</p>
            </div>
            <div className="pt-9 flex flex-row justify-center">
                <button className="rounded-2xl bg-[#373737] text-[#ffffff] pl-40 pr-40 pt-4 pb-4 text-xl">Add to calendar</button>
            </div>
            <div>
            <NavMenu></NavMenu>
            </div>
            <div>
            <h3 className="pt-40 pb-10 flex flex-row justify-center">No thank</h3>
>>>>>>> a7dccc0e2702989ecd3b4c8f613ed0fefd9d024c
            </div>
        </div>
        <NavMenu/>
    </>
  );
}
