import { Link } from "react-router";
import { useEffect, useState } from "react";
import styles from "../css/header.module.css";

function Header() {
  const [quantity, setQuantity] = useState(0);
  const isEmpty = quantity === 0;
  const formatedStirng = quantity > 9 ? "9+" : quantity;

  const updateQuantity = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const total = cartItems.length;
    setQuantity(total);
  };

  useEffect(() => {
    // run once on mount
    /* eslint-disable-next-line "react-hooks/set-state-in-effect" */
    updateQuantity();

    // listen for the custom "cartUpdated" event
    window.addEventListener("cartUpdated", updateQuantity);

    return () => window.removeEventListener("cartUpdated", updateQuantity);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles["header__content"]}>
        <div>
          <h1>Dream Decor</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/homepage">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart" className={styles["header__cart-link"]}>
                <span className={styles["header__cart-link-text"]}>Cart</span>
                {!isEmpty && (
                  <span className={styles["header__cart-items-quantity"]}>
                    {formatedStirng}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
