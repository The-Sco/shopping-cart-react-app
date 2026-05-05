import { Link } from "react-router";
import data from "../data/categories.js";
import styles from "../css/homepage.module.css";

function Homepage() {
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
                to="/shop"
                className={styles.category}
                state={{ category: item.name }}
                key={item.id}
              >
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Homepage;
