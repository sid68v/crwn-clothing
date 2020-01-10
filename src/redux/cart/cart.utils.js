export const addItemToCart = (cartItems, itemToAdd) => {
  let isItemPresentInCart = cartItems.find(item => item.id === itemToAdd.id);

  if (isItemPresentInCart) {
    const items = cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    return items;
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const clearItem = (cartItems, item) => {
  return cartItems.filter(cartItem => cartItem.id !== item.id);
};

export const reduceItem = (cartItems, item) => {
  const ItemPresentInCart = cartItems.find(cartItem => cartItem.id === item.id);

  if (ItemPresentInCart.quantity == 1) {
    return (cartItems = clearItem(cartItems, item));
  }

  return cartItems.map(cartItem =>
    cartItem.id == item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
