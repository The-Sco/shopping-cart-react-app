function CartButton({ product, setModalOpen, setSelectedProduct, className }) {
  const handleClick = () => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <>
      <button
        data-testid="add-to-cart-button"
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
