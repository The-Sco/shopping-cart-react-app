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
                <i className="fa-brands fa-facebook" />
              </li>
              <li>
                <i className="fa-brands fa-square-instagram" />
              </li>
              <li>
                <i className="fa-brands fa-x-twitter" />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["footer__links"]}>
          <div className={styles["footer__links-section"]}>
            <h3>Customer Service</h3>
            <ul>
              <li>Help & Contact Us</li>
              <li>Orders & Shipping</li>
              <li>Payment</li>
              <li>Returns & Refunds</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className={styles["footer__links-section"]}>
            <h3>About Us</h3>
            <ul>
              <li>About us</li>
              <li>Showrooms</li>
              <li>Shops</li>
            </ul>
          </div>
          <div className={styles["footer__links-section"]}>
            <h3>Legal</h3>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
