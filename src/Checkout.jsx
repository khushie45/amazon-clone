import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }] = useStateValue()
    return (
        <div className='checkout'>
            <div className="checkout--left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Pay_Balance/apay_page_mobile_new_logo.jpg" alt="ad" className="checkout--ad" />

                {basket?.length === 0 ? (
                    <div className='checkout--title'>
                        <h2 className='checkout--header'>Your Amazon Cart is empty.</h2>
                        <p>
                        Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.
                        </p>
                    </div>
                    ) : (
                    <div className='checkout--title'>
                        <h2 className='checkout--header'>Your Shopping Basket</h2>

                        {basket?.map((item, index) => (
                            <CheckoutProduct 
                                key={index}
                                id= {item.id}
                                title= {item.title}
                                image= {item.image}
                                price= {item.price}
                                rating= {item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>

            {basket.length > 0 && (
                <div className="checkout--right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout