import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch ({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
    <div className='checkoutProduct'>
        <img src={image} alt="image" />
        <div className="checkoutProduct--info">
            <p className='checkoutProduct--title'>{title}</p>
            <p className="checkoutProduct--price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct--rating">
                {
                    Array(rating)
                    .fill()
                    .map((_, index) => (
                        <p key={index}>⭐</p>
                    ))
                }
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct