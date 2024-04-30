const Card = ({icon, heading, text, actionTxt, actionIcon, contImg}) => {
    return(
        <div>
            <div>
                <img src={icon} alt="" />
                <h3>{heading}</h3>
                <p>{text}</p>
                <button>
                    {actionTxt}
                    <img src={actionIcon} alt="" />
                </button>
                <div>
                    <img src={contImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card