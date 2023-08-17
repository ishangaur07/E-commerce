import React from 'react'
import classes from './Header.module.css';
import logo from './amazon.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
    <div className={classes.header}>
      <img className={classes.headerLogo} src={logo} alt='about'></img>
    <div className={classes.headerSearch}>
      <input className={classes.headerSearchInput} type="text" placeholder='Search'/>
      <SearchIcon className={classes.headerSeachIcon}></SearchIcon>
      </div>
      <div className={classes.header_nav}>
        <div className={classes.header_option}>
          <span className={classes.header_optionLineOne}>
              Hello Guest
          </span>
          <span className={classes.header_optionLineTwo}>
              Sign In
          </span>
        </div>

        <div className={classes.header_option}>
          <span className={classes.header_optionLineOne}>
              Returns
          </span>
          <span className={classes.header_optionLineTwo}>
              Orders
          </span>
        </div>
        <div className={classes.header_option}>
          <span className={classes.header_optionLineOne}>
              Your
          </span>
          <span className={classes.header_optionLineTwo}>
              Price
          </span>
        </div>

        <div className={classes.header_optionBasket}>
          <ShoppingBasketIcon></ShoppingBasketIcon>
          <span className="header_optionLineTwo header_basketCount">0</span>
        </div>
      </div>
  </div>
  )
}

export default Header;