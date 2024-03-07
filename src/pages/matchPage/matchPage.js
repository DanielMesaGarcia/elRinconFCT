import hangout from "../../assets/images/hangout.png";

export default function MatchPage(){
    return(
        <div className="w-390 h-844 bg-grey pr-4 pl-4" >
            <div className="flex flex-row justify-center">
            <h1 className="text-3xl pt-123 flex flex-row justify-center">You've got a match!</h1>
            {/* <h1 className="font-2xl pt-20 flex flex-row justify-center text-xl">You've got a match!</h1> */}
            </div>
            <div className="pt-9 flex flex-row justify-center
            w-330 h-383 bg-cover bg-center relative rounded-2xl mx-5"
            style={{ "background-image": `url(${hangout})` }}>
                <p className="text-4xl text-white mx-5 font-sans">Board game night</p>
            </div>
            <div className="pt-9 flex flex-row justify-center">
                <button className="rounded-2xl bg-[#373737] text-[#ffffff] pl-40 pr-40 pt-4 pb-4 text-xl">Add to calendar</button>
            </div>
            <div>
                <navMenu/>
            </div>
            <div>
            <h3 className="pt-40 pb-10 flex flex-row justify-center">No thank</h3>
            </div>
        </div>
    );
}