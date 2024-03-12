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
    );
}