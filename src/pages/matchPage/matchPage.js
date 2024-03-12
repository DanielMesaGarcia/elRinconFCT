import hangout from "../../assets/images/hangout.png";
import NavMenu from "../../components/navMenu";

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
            </div>
        </div>
        <NavMenu/>
    </>
  );
}
