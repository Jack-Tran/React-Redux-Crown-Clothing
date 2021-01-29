import React, { createRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { toggleCartHidden } from "../../redux/actions/cartAction";

import "./Header.scss";

const Header = ({ currentUser, hidden, toggleCartHidden }) => {
  const container = createRef();

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      if (!hidden) {
        toggleCartHidden();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <div className="container" ref={container}>
          <CartIcon />
          {hidden ? null : <CartDropdown />}
        </div>
      </div>
    </div>
  );
};

/*
const mapStateToProps = ({state}) => ({
  currentUser: state.user.currentUser,
});

advance way of destructuring. we are destructuring out the user 
first from state then we are destructuring currentUser from user.
*/
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
