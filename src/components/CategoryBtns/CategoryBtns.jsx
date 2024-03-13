import { useState } from "react";

const CategoryBtn = ({src, alt, className}) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <button onClick={() => setIsOpen(true)}>
            <img src={src} alt={alt} className={className}/>
        </button>
    )
}

export default CategoryBtn;