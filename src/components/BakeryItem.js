import React from 'react'
import "../App.css"

export default function BakeryItem({item, setCart}) {
    const update = () => {
        setCart(item.name, item.price)
    }

    return(
        <div className="BakeryItem">
            <img src={item.image}></img>
            <div className="description">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <div className="bottom">
                    <p>${item.price}</p>
                    <button onClick={update}> Add to Cart </button>
                </div>
            </div>
        </div>
    )
}