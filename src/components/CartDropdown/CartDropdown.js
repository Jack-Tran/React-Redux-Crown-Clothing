import React from "react";

import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/selectors/cartSelectors";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

/* 
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
}); 

using reselect as a selector to grab pieces of the state
by using selector we are preventing the cartDropdown to re-render
whenever there is a change in the state that does not affect
the cartDropdown
*/

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
