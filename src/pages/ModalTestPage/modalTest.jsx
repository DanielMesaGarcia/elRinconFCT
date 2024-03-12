import React from 'react';
import { useState } from 'react';
import CategoryModal from '../../components/CategoryModalComponent/CategoryModalComponent';

const ModalTestPage = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        {
            name: 'Outdoor',
            subcategories: ['Hiking', 'Camping', 'Fishing', 'Cycling']
        },
        {
            name: 'Indoor',
            subcategories: ['Board Games', 'Cooking', 'Reading', 'Yoga']
        },
        {
            name: 'Water Activities',
            subcategories: ['Swimming', 'Surfing', 'Kayaking', 'Sailing']
        },
        {
            name: 'Team Sports',
            subcategories: ['Football', 'Basketball', 'Baseball', 'Volleyball']
        },
        // add more categories as needed
    ];

    return (
        <div>
            <CategoryModal categories={categories} setCategory={setSelectedCategory} />
            {/* rest of your page components */}
        </div>
    );

};

export default ModalTestPage;