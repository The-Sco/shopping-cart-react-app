import { Link } from "react-router";
import styles from "../css/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__content"]}>
        <div className={styles["footer__brand"]}>
          <div>
            <h2>Dream Decor</h2>
          </div>
          <div>
            <p className={styles["footer__follow-us"]}>Follow us</p>
            <ul>
              <li>
                <Link to="/home" aria-label="Facebook">
                  <i className="fa-brands fa-facebook" />
                </Link>
              </li>
              <li>
                <Link to="/home" aria-label="Instagram">
                  <i className="fa-brands fa-square-instagram" />
                </Link>
              </li>
              <li>
                <Link to="/home" aria-label="Twitter">
                  <i className="fa-brands fa-x-twitter" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["footer__links"]}>
          <div className={styles["footer__links-section"]}>
            <h3>Customer Service</h3>
            <ul>
              <li>
                <Link to="/home">Help & Contact Us</Link>
              </li>
              <li>
                <Link to="/home">Orders & Shipping</Link>
              </li>
              <li>
                <Link to="/home">Payment</Link>
              </li>
              <li>
                <Link to="/home">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/home">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className={styles["footer__links-section"]}>
            <h3>About Us</h3>
            <ul>
              <li>
                <Link to="/home">About us</Link>
              </li>
              <li>
                <Link to="/home">Showrooms</Link>
              </li>
              <li>
                <Link to="/home">Shops</Link>
              </li>
            </ul>
          </div>
          <div className={styles["footer__links-section"]}>
            <h3>Legal</h3>
            <ul>
              <li>
                <Link to="/home">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/home">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/home">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
