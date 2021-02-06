import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/actions/cartAction";
import { selectCartItemsCount } from "../../redux/selectors/cartSelectors";

import "./CartIcon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

/* 
const mapStateToProps = (state) => ({
  itemCount: state.cart.cartItems.reduce(
    (accQty, cartItem) => accQty + cartItem.quantity,
    0
  ),
}); 

using reselect as a selector to grab pieces of the state
by using selector we are preventing the cartIcon to re-render
whenever there is a change in the state that does not affect
the cartIcon
*/

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
