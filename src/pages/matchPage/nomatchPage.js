export default function NomatchPage(){
    return(
        <div className="w-390 h-844 bg-grey " >
            <div className="flex flex-row justify-center">
            <h1 className="font-xl pt-20 flex flex-row justify-center text-lg">Unfortunately, we couldn’t find a match this time</h1>
            </div>
            <div className="pt-9 flex flex-row justify-center">
                <img className="w-300 h-534 rounded-2xl " 
                src="/images/hangout.png" alt="" />
            </div>
            <div>
                <h3 className="pt-10 pb-10 flex flex-row justify-center">Would you like to go by your self</h3>
            </div>
            <div className="pt-2  flex flex-row justify-center rounded-3xl flex space-x-35 ">
                <button className="rounded-lg bg-[#373737] text-[#ffffff] pl-3 pr-3 pt-2 pb-2 mr-20">No</button>
                <button className="rounded-lg bg-[#373737] text-[#ffffff] pl-3 pr-3 pt-2 pb-2 ml-20">Yes</button>
            </div>
            <div>
                <navMenu/>
            </div>
        </div>


        // <div className="w-390 h-844 bg-grey" >
        //     <h1 className="font-2xl pt-10">Unfortunately, we couldn’t find a match this time</h1>
        //     <div className="pt-6">
        //         <img className="w-300 h-534 rounded-2xl" 
        //         src="/images/hangout.png" alt="" />
        //     </div>
        //     <div className="pt-6">
        //         <h3 className="pt-3">Would you like to go by your self</h3>
        //         <div className="pt-3 pb-5">
        //             <button className="rounded-lg bg-[#373737] text-[#ffffff] pl-3 pr-3 pt-2 pb-2 mr-4">No</button>
        //             <button className="rounded-lg bg-[#373737] text-[#ffffff] pl-3 pr-3 pt-2 pb-2 ml-4">Yes</button>
        //         </div>
        //     </div>
        //     <div>
        //         <navMenu/>
        //     </div>
        // </div>
    );
}