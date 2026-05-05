import { Link } from "react-router";
import styles from "../css/header.module.css";

function Header() {
  return (
    <header className={styles.header}>
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
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
