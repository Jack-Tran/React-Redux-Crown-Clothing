export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  /*  
  if cart item exists then return a new version of the array
  by using map so that our state knows when to re-render properly
  */
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      /*
      and if cart item id is equal to cart item to add id 
      then spread in the cart item and add the quantity
      of that cart item by one
      */
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : /*
        else just return the cart item
        */
          cartItem
    );
  }

  /*
  if existing cart item does not exist (existingCartItem returns null)
  return a new array with the quantity value added
  */
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
