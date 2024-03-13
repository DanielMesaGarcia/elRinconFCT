import { useState } from "react";

const CategoryBtn = ({src, alt, className, isOpen, setIsOpen}) => {
    return (
        <button onClick={() => setIsOpen(true)}>
            <img src={src} alt={alt} className={className}/>
        </button>
    )
}

export default CategoryBtn;