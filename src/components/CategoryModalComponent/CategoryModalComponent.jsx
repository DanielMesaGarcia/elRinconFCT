import React, { useState } from 'react';

const CategoryModal = ({ categories, setCategory, isOpen, onClose }) => {
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);

    const handleButtonClick = (subcategory) => {
        if (selectedSubcategories.includes(subcategory)) {
            setSelectedSubcategories(selectedSubcategories.filter(sc => sc !== subcategory));
        } else {
            setSelectedSubcategories([...selectedSubcategories, subcategory]);
        }
        setCategory(subcategory);
    };

    const handleClearButtonClick = () => {
        setSelectedSubcategories([]);
    };

    return (
        <div className={`${isOpen ? 'block' : 'hidden'} bg-grey bg-opacity-50 fixed inset-0 h-full w-screen z-40 overflow-y-auto `}>
            <div className='bg-white h-844 ml-30'>
                <button className=' ml-10 mt-10' onClick={onClose}>X</button>
                <button className='ml-30' onClick={handleClearButtonClick}>Clear</button>
                <div className=' bg-white'>
                    {categories.map((category, index) => (
                        <div key={index}>
                            <div className='h-[20px] w-full bg-pink mt-20 ml-10'></div>
                            <h3 className='font-semibold mt-20 ml-10'>{category.name}</h3>
                            <div className='grid grid-cols-3 m-auto w-full justify-items-center items-center'>
                                {category.subcategories.map((subcategory, subIndex) => (
                                    <div className='h-[150px]' key={subIndex}>
                                        <button
                                            className={`bg-grey rounded-lg h-[80px] w-[80px] mt-30 ${selectedSubcategories.includes(subcategory) ? 'bg-pink' : ''}`}
                                            onClick={() => handleButtonClick(subcategory)}
                                        >
                                            picture
                                        </button>
                                        <div className="w-[80px] mt-2 text-center">{subcategory}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryModal;