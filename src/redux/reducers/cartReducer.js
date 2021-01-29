import { ADD_ITEM, TOGGLE_CART_HIDDEN } from "../types/cartTypes";
import { addItemToCart } from "../utils/cartUtils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        //return the opposite of current state
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,

        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
