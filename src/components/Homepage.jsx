import { Link } from "react-router";
import { useEffect } from "react";
import data from "../data/categories.js";
import styles from "../css/homepage.module.css";

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className={styles.hero}>
        <div>
          <h2>Decorate your Dream Space!</h2>
          <p>
            Explore our collection of stylish and affordable home decor items to
            transform your living space into a dream haven.
          </p>
          <Link to="/shop">Shop now</Link>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles["section__title-wrapper"]}>
          <h2>Top Categories</h2>
        </div>
        <div className={styles["categories-grid"]}>
          {data.map((item) => {
            return (
              <Link
                to={`/shop/${item.name.toLowerCase()}`}
                className={styles.category}
                state={{ category: item.name }}
                key={item.id}
              >
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
              </Link>
            );
          })}
        </div>
      </section>
      <section className={styles["newsletter-section"]}>
        <div>
          <h2 className={styles["newsletter-text"]}>
            Stay in Loop for Exclusive Offers!
          </h2>
          <p className={styles["newsletter-text"]}>
            Subscribe to our newsletter to be the first to recive exclucive
            offers. Dicover what's trending and decorate your dream space with
            us.
          </p>
        </div>
        <div className={styles["newsletter-input"]}>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
