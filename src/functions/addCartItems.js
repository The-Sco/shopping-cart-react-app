function saveCartItems(product, number) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let isInCart = false;
  let isEmtpy = cartItems.length === 0;

  if (isEmtpy) {
    cartItems.push({
      product: product,
      quantity: number,
    });
  }

  if (!isEmtpy) {
    cartItems.forEach((item) => {
      if (item.product.id === product.id) {
        item.quantity += number;
        isInCart = true;
      }
    });
  }

  if (!isInCart && !isEmtpy) {
    cartItems = [
      ...cartItems,
      {
        product: product,
        quantity: number,
      },
    ];
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  window.dispatchEvent(new Event("cartUpdated"));
}

export default saveCartItems;
