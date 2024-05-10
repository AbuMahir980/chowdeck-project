

const CategorySingleCard = ({image, text, backgroundColor}) => {
    const bgClass = `bg-${backgroundColor}`
    return(
        <div className={`${bgClass} bg-sky-200 w-[116px] h-[116px] rounded-[10px] flex flex-col items-center justify-center cursor-pointer mr-8 last:mr-0`}>
            <img src={image} alt={text} className="h-6" />
            <p className="text-[14px] font-normal leading-[18px] text-center mt-4 tracking-normal">{text}</p>
        </div>
    )
}

export default CategorySingleCard