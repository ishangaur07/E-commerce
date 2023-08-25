import React from 'react'
import classes from './Header.module.css';
import logo from './amazon.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../../Firebase';
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className={classes.header}>
      <Link to="/"><img className={classes.headerLogo} srcSet={logo} alt='about'></img></Link>
      <div className={classes.headerSearch}>
        <input className={classes.headerSearchInput} type="text" placeholder='Search' />
        <SearchIcon className={classes.headerSeachIcon}></SearchIcon>
      </div>
      <div className={classes.header_nav}>
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className={classes.header_option}>
            <span className={classes.header_optionLineOne}>
              {user.email}
            </span>
            <span className={classes.header_optionLineTwo}>
              {user ? 'Sign out' : 'Sign in'}
            </span>
          </div>
        </Link>

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
