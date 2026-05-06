import { useState } from "react";
import AddToCartModal from "./AddToCartModal";

function CartButton({ product, className }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <button
        aria-label="Add to cart button"
        onClick={handleClick}
        className={className}
      >
        <i className="fa-solid fa-cart-arrow-down"></i>
      </button>
      {modalOpen && (
        <AddToCartModal product={product} setModalOpen={setModalOpen} />
      )}
    </>
  );
}

export default CartButton;
