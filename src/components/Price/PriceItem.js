import React from "react";
import Button from "../Button/Button";
import "./Price.css"

function PriceItem (props){
    return(
        <div className="price-card-details">
            <div className="img"> 
                <img src={props.image}  alt="img"/>
            </div>
            <div className="name">
                <h1>{props.name}</h1>
                <h2>${props.price}</h2>
            </div>
            <h3>{props.sub}</h3>
            <Button
            name="basket"
            />
        </div>
    )
}
export default PriceItem;