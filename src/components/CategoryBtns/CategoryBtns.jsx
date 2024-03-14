const CategoryBtn = ({src, alt, className, setIsOpen}) => {
    return (
        <button onClick={() => setIsOpen(true)}>
            <img src={src} alt={alt} className={className} />
        </button>
    )
}

export default CategoryBtn;