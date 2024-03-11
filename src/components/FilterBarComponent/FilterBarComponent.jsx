import React from "react";
import { useState } from "react";

const FilterBarComponent = ({ categories, setCategory }) => {


    return (
        <div>
            <div className="flex flex-row justify-between gap-1 w-[90%] m-auto mt-10 ">
                <div>
                    <button className="mr-5 w-[50px] h-[50px] bg-pink">X</button>
                    <button className="mr-5 w-[50px] h-[50px] bg-pink">X</button>
                    <button className="mr-5 w-[50px] h-[50px] bg-pink">X</button>
                    <button className="mr-5 w-[50px] h-[50px] bg-pink">X</button>
                    <button className="mr-5 w-[50px] h-[50px] bg-pink">X</button>
                    <button className="mr-5 w-[50px] h-[50px] bg-pink">X</button>

                </div>
                <div>
                    <button>View All</button>
                </div>
            </div>

        </div>
    )


}

export default FilterBarComponent;