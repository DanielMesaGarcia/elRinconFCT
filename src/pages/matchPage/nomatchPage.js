<<<<<<< HEAD
import NavMenu from "../../components/navMenu";
import hangout from "../../assets/images/hangout.png";


export default function NomatchPage(){
    return(
        <>
            {/* the whole screen */}
            <div className="h-844 bg-grey px-40" >
                {/* no match text */}
                <div className="flex flex-row justify-center">
                    <h1 className="text-2xl pt-85 pb-40 flex flex-row font-fira justify-center">Unfortunately, we couldn't find a match this time</h1>
                </div>
                {/* event card */}
                <div
                    style={{ "background-image": `url(${hangout})` }}
                    className="h-388 bg-cover bg-center relative rounded-2xl"
                >
                    <p className="text-4xl font-gemunu font-extrabold  pl-4">Board game night</p>
                </div>
                {/* add to calendar text */}
                <div>
                    <h3 className="font-fira text-2xl pt-60 flex flex-row justify-center">Would you like to go by yourself?</h3>
                </div>
                {/* yes and no btns */}
                <div className="pt-40  flex flex-row justify-between">
                    <button className="w-63 h-60 rounded-2xl bg-darkGrey text-white">No</button>
                    <button className="w-63 h-60 rounded-2xl bg-darkGrey text-white">Yes</button>
                </div>
            </div>
            <NavMenu/>
        </>
=======
import hangout from "../../assets/images/hangout.png";
import NavMenu from "../../components/navMenu";

export default function NomatchPage(){
    return(
        <div className="h-844 bg-grey px-20  " >
            <div className="flex flex-row justify-center">
            <h1 className="text-3xl pt-123 flex flex-row justify-center">Unfortunately, we couldn’t find a match this time</h1>
            </div>
            <div className="pt-9 flex flex-row justify-center
            w-330 h-383 bg-cover bg-center relative rounded-2xl mx-5"
            style={{ "background-image": `url(${hangout})` }}>
                <p className="text-4xl text-black mx-5 font-gemunu">Board game night</p>
            </div>
            <div>
                <h3 className="pt-10 pb-10 flex flex-row justify-center">Would you like to go by your self</h3>
            </div>
            <div className="pt-2  flex flex-row justify-center rounded-3xl flex space-x-123 ">
                <button className="rounded-lg bg-[#373737] text-[#ffffff] pl-3 pr-3 pt-2 pb-2 mr-20">No</button>
                <button className="rounded-lg bg-[#373737] text-[#ffffff] pl-3 pr-3 pt-2 pb-2 ml-20">Yes</button>
            </div>
            <div>
                <NavMenu/>
            </div>
        </div>

>>>>>>> a7dccc0e2702989ecd3b4c8f613ed0fefd9d024c
    );
}