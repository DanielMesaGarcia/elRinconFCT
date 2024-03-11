import React from 'react';

const CategoryModal = ({ categories, setCategory }) => {
    return (
        <div className='bg-white h-844 ml-10'>
            <div className='ml-10'>

                {categories.map((category, index) => (
                    <div key={index}>
                        <div className='h-[20px] w-full bg-pink mt-20'></div>
                        <h3 className=' font-semibold mt-20'>{category.name}</h3>
                        <div className='grid grid-cols-3 m-auto w-full justify-items-center items-center'>
                            {category.subcategories.map((subcategory, subIndex) => (
                                <div className='h-[150px]'>
                                    <button className='bg-grey  rounded-lg h-[80px] w-[80px] mt-30' key={subIndex} onClick={() => setCategory(subcategory)}>
                                        picture
                                    </button>
                                    <div className="w-[80px] mt-2 text-center">{subcategory}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={() => setCategory(null)}>Close</button>
            </div>
        </div>
    );
};

export default CategoryModal;