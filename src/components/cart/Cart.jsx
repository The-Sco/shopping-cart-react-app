import CartProductCard from "./CartProductCard";
import { useState, useEffect } from "react";
import styles from "../../css/cart/cart.module.css";

function Cart() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || [],
  );
  const hasContent = cartItems.length > 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = hasContent
    ? cartItems.map((item) => {
        return (
          <CartProductCard
            key={item.product.id}
            item={item}
            setCartItems={setCartItems}
          ></CartProductCard>
        );
      })
    : null;

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div>
          <h2 className={styles["cart__title"]}>
            Cart: {cartItems.length} items
          </h2>
        </div>
      </section>
      <section className={styles.section} data-content={hasContent}>
        {hasContent ? (
          <div className={styles["cards-grid"]}>{content}</div>
        ) : (
          <div className={styles["message-wrapper"]}>
            <p className={styles["message"]}>Your cart is empty</p>
            <i className="fa-solid fa-circle-question"></i>
          </div>
        )}
      </section>
    </main>
  );
}

export default Cart;
