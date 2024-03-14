import hangout from "../../assets/images/backgroundImgs/hangout.png";
import NavMenu from "../../components/navMenu";
import MatchedComponent from "../../components/MatchedComponent/MatchedComponent";
import DetailsCardComponent from "../../components/DetailsCardComponent/DetailsCardComponent";

export default function MatchPage() {
  return (
    <>  
        {/* the whole screen */}
        <div className="px-40">
            {/* match text */}
            <h1 className="text-3xl pt-110 pb-60 flex flex-row justify-center">
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
                <button className="bg-darkGrey text-white w-310 h-60 rounded-2xl">
                    Cool!
                </button>
            </div>
        </div>
        <NavMenu/>
    </>
  );
}
