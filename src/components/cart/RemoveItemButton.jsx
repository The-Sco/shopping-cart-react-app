import removeCartItem from "../../functions/removeCartItem.js";

function RemoveItemButton({ product, setCartItems, className }) {
  const handleClick = () => {
    removeCartItem(product);
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  };

  return (
    <button
      aria-label="Remove item"
      onClick={handleClick}
      className={className}
    >
      <i className="fa-solid fa-trash-can"></i>
    </button>
  );
}

export default RemoveItemButton;
