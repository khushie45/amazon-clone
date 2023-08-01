import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'

function Checkout() {
    const [{ basket }] = useStateValue()
    return (
        <div className='checkout'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Pay_Balance/apay_page_mobile_new_logo.jpg" alt="ad" className="checkout--ad" />

            {basket?.length === 0 ? (
                <div className='checkout--title'>
                    <h2>Your Amazon Cart is empty.</h2>
                    <p>
                    Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.
                    </p>
                </div>
            ) : (
                <div className='checkout--title'>
                    <h2>YOur Shopping Basket</h2>
                </div>
            )}
        </div>
    )
}

export default Checkout