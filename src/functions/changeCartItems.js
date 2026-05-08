function changeCartItems(product, number) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  cartItems.forEach((item) => {
    if (item.product.id === product.id) {
      item.quantity = number;
    }
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  window.dispatchEvent(new Event("cartUpdated"));
}

export default changeCartItems;
