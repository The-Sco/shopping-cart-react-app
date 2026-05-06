import { useEffect, useState } from "react";
import FocusLock from "react-focus-lock";
import NumberInput from "./NumberInput";
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
    if (target.classList.contains(styles["dialog-overlay"])) {
      setModalOpen(false);
    }
  };

  function handleAddTocCart() {
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
          item.quantity = number;
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
    setModalOpen(false);
  }

  return (
    <div className={styles["dialog-overlay"]} onClick={handleOverlayClick}>
      <FocusLock className={styles["dialog-wrapper"]}>
        <dialog open className={styles.dialog}>
          <div>
            <div>
              <img src={product.image} alt="" />
            </div>
            <div>
              <div>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </div>
              <div>
                <NumberInput
                  number={number}
                  setNumber={setNumber}
                ></NumberInput>
                <div>
                  <button onClick={handleAddTocCart}>Add to cart</button>
                  <button>Continue shopping</button>
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
