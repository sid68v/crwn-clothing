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
