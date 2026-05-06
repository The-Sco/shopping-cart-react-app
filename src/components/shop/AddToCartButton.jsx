function CartButton({ product, className, setModalOpen, setSelectedProduct }) {
  const handleClick = () => {
    setSelectedProduct(product);
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
    </>
  );
}

export default CartButton;
