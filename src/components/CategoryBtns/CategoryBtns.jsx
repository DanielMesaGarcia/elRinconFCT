import { useState } from "react";

const CategoryBtn = ({src, alt}) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <button onClick={() => setIsOpen(true)}>
        <img src={src} alt={alt}/>
      </button>
    )
}

export default CategoryBtn;