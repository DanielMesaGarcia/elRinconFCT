
export default function MatchPage(){
    return(
        <div className="w-390 h-844 bg-grey " >
            <div className="flex flex-row justify-center">
            <h1 className="font-2xl pt-20 flex flex-row justify-center text-xl">You've got a match!</h1>
            </div>
            <div className="pt-9 flex flex-row justify-center">
                <img className="w-300 h-534 rounded-2xl " 
                src="/images/hangout.png" alt="" />
            </div>
            <div className="pt-9 flex flex-row justify-center">
                <button className="rounded-2xl bg-[#373737] text-[#ffffff] pl-20 pr-20 pt-4 pb-4 text-xl">Add to calendar</button>
            </div>
            <div>
                <navMenu/>
            </div>
            <div>
            <h3 className="pt-10 pb-10 flex flex-row justify-center">No thank</h3>
            </div>
        </div>
    );
}