import { useState } from "react";
import AddToCartModal from "./AddToCartModal";

function CartButton({ product }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <button onClick={handleClick}>
        <i className="fa-solid fa-cart-arrow-down"></i>
      </button>
      {modalOpen && (
        <AddToCartModal product={product} setModalOpen={setModalOpen} />
      )}
    </>
  );
}

export default CartButton;
