function removeCartItem(product) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  const updatedItems = cartItems.filter(
    (item) => item.product.id !== product.id,
  );

  localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  window.dispatchEvent(new Event("cartUpdated"));
}

export default removeCartItem;
