import React, { useEffect, useState } from 'react';
import { supabase } from "../../services/supabaseClient";

const CategoryModal = ({ categories, setCategory, isOpen, onClose, handleSubcategoriesChange }) => {
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);

    const uniqueCategories = categories.reduce((unique, category) => {
        const existingCategory = unique.find(item => item.category === category.category);
        if (existingCategory) {
            existingCategory.subcategories.push(category.subcategories);
        } else {
            unique.push({ ...category, subcategories: [category.subcategories] });
        }
        return unique;
    }, []);



    const bgColors = ['bg-red', 'bg-orange', 'bg-green', 'bg-purple', 'bg-blue', 'bg-pink', 'bg-yellow'];

    useEffect(() => {
        const storedSubcategories = localStorage.getItem('selectedSubcategories');
        if (storedSubcategories) {
            setSelectedSubcategories(JSON.parse(storedSubcategories));
        }
    }, []);

    const handleButtonClick = (subcategory) => {
        let updatedSubcategories;
        if (selectedSubcategories.includes(subcategory)) {
            updatedSubcategories = selectedSubcategories.filter(sc => sc !== subcategory);
        } else {
            updatedSubcategories = [...selectedSubcategories, subcategory];
        }
        setSelectedSubcategories(updatedSubcategories);
        localStorage.setItem('selectedSubcategories', JSON.stringify(updatedSubcategories));
        handleSubcategoriesChange(updatedSubcategories);
    };

    const handleClearButtonClick = () => {
        setSelectedSubcategories([]);
        localStorage.removeItem('selectedSubcategories');
        handleSubcategoriesChange([]);
    };

    return (
        <div className={`${isOpen ? 'block' : 'hidden'} bg-grey bg-opacity-50 fixed inset-0 w-screen z-40 overflow-y-auto `}>
            <div className='bg-white h-844 ml-30'>
                <div className='fixed flex items-center bg-white w-[100%] h-[50px] shadow-sm'>
                    <button className=' ml-10 ' onClick={onClose}>X</button>
                    <button className='ml-30' onClick={handleClearButtonClick}>Clear</button>
                </div>
                <div className=' bg-white pt-50'>
                    {uniqueCategories.map((category, index) => (
                        <div key={index}>
                            <div className={`${bgColors[index % bgColors.length]} h-[20px] w-full mt-20 ml-10`}></div>
                            <h3 className='font-semibold mt-20 ml-10'>{category.category}</h3>
                            <div className='grid grid-cols-3 m-auto w-full justify-items-center items-center'>
                                {category.subcategories.map((subcategory, subIndex) => (
                                    <div className='h-[150px]' key={subIndex}>
                                        <button
                                            className={` rounded-lg h-[80px] w-[80px] mt-30 ${selectedSubcategories.includes(subcategory) ? bgColors[index % bgColors.length] : 'bg-grey'}`}
                                            onClick={() => handleButtonClick(subcategory)}
                                        >
                                            {subcategory}
                                        </button>

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