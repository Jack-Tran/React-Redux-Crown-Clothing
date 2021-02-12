import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/selectors/cartSelectors";
import { toggleCartHidden } from "../../redux/actions/cartAction";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  /*
  if we pass in ...otherProps instead of dispatch we can 
  console.log(otherProps) and it will show dispatch is accessible.
  this is possible because of connect and since we did not pass in
  a mapDispatchToProps, connect by default passes dispatch down as
  a prop
  */
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton
        /*
        in the onClick we wrapped the history.push and dispatch with {}
        the {} indicates we are using a multiline function
        */
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
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

export default withRouter(connect(mapStateToProps)(CartDropdown));
