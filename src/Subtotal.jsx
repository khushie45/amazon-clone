import React from 'react'
import "./Subtotal.css"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket}]= useStateValue();

    return (
        <div className='subtotal'>
            <p>
                Subtotal ({basket?.length} items) : 
                <strong> ₹{ getBasketTotal(basket) }</strong>
            </p>
            <small className="subtotal--gift">
            <input type="checkbox" /> This order contains a gift
            </small>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal