import { useEffect, useState } from "react";
import changeCartItems from "../../functions/changeCartItems.js";
import NumberInput from "../reusable/NumberInput";
import RemoveItemButton from "./RemoveItemButton";
import styles from "../../css/cart/cartProduct.module.css";

function CartProductCard({ item, setCartItems }) {
  const [number, setNumber] = useState(item.quantity);
  const product = item.product;

  useEffect(() => {
    changeCartItems(product, number);
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));

    // Runs only when the number has changed
    /* eslint-disable-next-line "react-hooks/exhaustive-deps" */
  }, [number]);

  return (
    <div className={styles["product-card"]}>
      <div className={styles["card__buttons-wrapper"]}>
        <RemoveItemButton
          product={product}
          setCartItems={setCartItems}
        ></RemoveItemButton>
      </div>
      <div>
        <img src={product.image} alt="" role="presentation" />
      </div>
      <div className={styles["card__info"]}>
        <p>{product.price}</p>
        <h3>{product.name}</h3>
      </div>
      <NumberInput
        number={number}
        setNumber={setNumber}
        name="Quantity"
        className={styles["card__number-input"]}
      ></NumberInput>
    </div>
  );
}

export default CartProductCard;
