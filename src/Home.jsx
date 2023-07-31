import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <img className='home--img' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" />

        <div className="home--row">
            <Product 
                id="1"
                title="The Lean Startup: The Million Copy Bestseller Driving Entrepreneurs to Success"
                price={350}
                rating={5}
                image="https://m.media-amazon.com/images/I/51qNUVObwFL.jpg"
            />
            <Product 
                id="2"
                title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers"
                price={34999}
                rating={4}
                image="https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY606_.jpg"
            />
        </div>

        <div className="home--row">
            <Product 
                id="3"
                title="Introducing Echo Pop| Smart speaker with Alexa and Bluetooth| Loud sound, balanced bass, crisp vocals| Purple"
                price={5000}
                rating={4}
                image="https://m.media-amazon.com/images/I/71N9HeEWq+L._SX569_.jpg"
            />
            <Product 
                id="4"
                title="Acer Nitro 5 AN515-58 Gaming Laptop 12th Gen Intel Core i7-12650H NVIDIA GeForce RTX 3070Ti 8GB Laptop Graphics 15.6 QHD 165Hz 3ms IPS Display 16GB DDR4 RGB Keyboard Windows 11 Home"
                price={104990}
                rating={4}
                image="https://m.media-amazon.com/images/I/51jbBOK5sSL._SX300_SY300_QL70_FMwebp_.jpg"
            />
            <Product 
                id="5"
                title="MageGee E7 Stereo Gaming Headset, Over-Ear Heavy Bass Noise Cancelling Wired Headphones with Retractable Mic for PS4, Xbox One, PC, 3.5 mm Audio Jack, Adjustable Headband"
                price={1700}
                rating={5}
                image="https://m.media-amazon.com/images/I/61Ci67YPy+L._SX679_.jpg"
            />
        </div>

        <div className="home--row">
            <Product 
                id="6"
                title="Apple 2022 11-inch iPad Pro (Wi-Fi, 128GB) - Space Grey (4th Generation)"
                price={80000}
                rating={5}
                image="https://m.media-amazon.com/images/I/81gC7frRJyL._SX679_.jpg"
            />
        </div>
    </div>
  )
}

export default Home