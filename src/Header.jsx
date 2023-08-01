import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"; 
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }] = useStateValue()
  console.log(basket)
  return (
    <nav className='header'>
      <Link to="/">
        <img 
          className='header--logo' 
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" 
        />
      </Link>

      <div className="header--search">
        <input type="text" className="header--searchInput" />
        <SearchIcon className="header--searchIcon" />
      </div>

      <div className="header--nav">
        <Link to="/login" className='header--link'>
          <div className='header--option'>
            <span className="header--optionLineOne">Hello Khushi</span>
            <span className="header--optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" className='header--link'>
          <div className='header--option'>
            <span className="header--optionLineOne">Returns</span>
            <span className="header--optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className='header--link'>
          <div className='header--option'>
            <span className="header--optionLineOne">Your</span>
            <span className="header--optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className='header--link'>
          <div className="header--optionBasket">
            <ShoppingBasketIcon />
            <span className='header--optionLineTwo header--basketCount'>{basket?.length}</span>
          </div>
        </Link>
      </div>

    </nav>
  )
}

export default Header