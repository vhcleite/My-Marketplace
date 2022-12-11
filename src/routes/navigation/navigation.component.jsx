import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss';
import {ReactComponent as MarketplaceLogo} from '../../assets/crown.svg'

const Navegation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <div><MarketplaceLogo className='logo'/></div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shops">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navegation;
