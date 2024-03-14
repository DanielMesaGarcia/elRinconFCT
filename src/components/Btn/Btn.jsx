const Btn = ({src, alt, className}) => {
    return (
        <button>
            <img src={src} alt={alt} className={className}/>
        </button>
    )
}

export default Btn;