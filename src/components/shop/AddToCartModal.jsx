import { useEffect, useState } from "react";
import FocusLock from "react-focus-lock";
import NumberInput from "../reusable/NumberInput";
import saveCartItems from "../../functions/addCartItems.js";
import styles from "../../css/shop/dialog.module.css";

function AddToCartModal({ product, setModalOpen }) {
  const [number, setNumber] = useState(1);

  // eventListener to close the dialog window when the "Escape" key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setModalOpen]);

  const handleOverlayClick = ({ target }) => {
    if (target.classList.contains(styles["dialog__overlay"])) {
      setModalOpen(false);
    }
  };

  function handleAddToCart() {
    saveCartItems(product, number);
    setModalOpen(false);
  }

  const continueShopping = () => {
    setModalOpen(false);
  };

  return (
    <div
      data-testid="modal-overlay"
      className={styles["dialog__overlay"]}
      onClick={handleOverlayClick}
    >
      <FocusLock className={styles["dialog-wrapper"]}>
        <dialog open aria-label="Add to cart dialog" className={styles.dialog}>
          <div>
            <div>
              <img data-testid="modal-image" src={product.image} alt="" />
            </div>
            <div>
              <div className={styles["dialog__info"]}>
                <p>{product.price}</p>
                <h2>{product.name}</h2>
              </div>
              <div className={styles["dialog__controls"]}>
                <NumberInput
                  name="Quantity"
                  number={number}
                  setNumber={setNumber}
                ></NumberInput>
                <div className={styles["dialog__buttons-wrapper"]}>
                  <button
                    disabled={number === 0}
                    className={styles["dialog__button"]}
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </button>
                  <button
                    className={styles["dialog__button"]}
                    onClick={continueShopping}
                  >
                    Continue shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </FocusLock>
    </div>
  );
}

export default AddToCartModal;
