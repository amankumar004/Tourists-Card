import { useState } from "react";


function Card({id, image, info, price, name, removeTour}){

    const [readmore, setreadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}...`;

    function readmoreHandler(){
        setreadmore(!readmore);
    }


    return (
        <div className="card">
            <img src={image} className="image" alt="img"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">$ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span onClick={readmoreHandler} className="read-more">
                        {readmore ? `Show less` : `Read more`}
                    </span>
                </div>
            </div>
            <div>
                <button className="btn-red" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
            </div>
        </div>
    )
}

export default Card;