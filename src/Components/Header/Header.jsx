import React from 'react'
import classes from './Header.module.css';
import logo from './amazon.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className={classes.header}>
     <Link to="/"><img className={classes.headerLogo} srcSet={logo} alt='about'></img></Link>
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

        <Link to="/checkout">
        <div className={classes.header_optionBasket}>
          <ShoppingBasketIcon></ShoppingBasketIcon>
          <span 
          className="header_optionLineTwo header_basketCount"
          >
            {basket?.length}
            </span>
        </div>
        </Link>
      </div>
  </div>
  )
 
}


export default Header;
