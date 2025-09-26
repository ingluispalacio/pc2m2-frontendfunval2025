function Image({image}) {
    return (
        <div className="h-45 w-full relative overflow-hidden">
            <img   
            src={image.src.medium} 
            alt={image.alt} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
            loading="lazy" 
            />
        </div>
    )
}

export default Image;