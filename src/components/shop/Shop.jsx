import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import getProducts from "../../data/products.js";
import ProductCard from "./ProductCard.jsx";
import AddToCartModal from "./AddToCartModal.jsx";
import styles from "../../css/shop/shop.module.css";

function formatTitle(str) {
  const letters = str.split("");
  letters[0] = letters[0].toUpperCase();
  return letters.join("");
}

function Shop() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [likedIDs, setLikedIDs] = useState(
    JSON.parse(localStorage.getItem("likedProducts")) || [],
  );

  const params = useParams();
  const category = params.category || "All";
  const products = getProducts(category);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        product={product}
        likedIDs={likedIDs}
        setLikedIDs={setLikedIDs}
        setModalOpen={setModalOpen}
        setSelectedProduct={setSelectedProduct}
      ></ProductCard>
    );
  });

  return (
    <main>
      {modalOpen && (
        <AddToCartModal
          product={selectedProduct}
          setModalOpen={setModalOpen}
        ></AddToCartModal>
      )}
      <section className={styles.hero}>
        <div>
          <h2 className={styles["hero__title"]}>
            Category: {formatTitle(category)}
          </h2>
        </div>
        <div>
          <nav className={styles["hero__nav"]}>
            <ul>
              <li>
                <Link to="/shop/all">All</Link>
              </li>
              <li>
                <Link to="/shop/furniture">Furniture</Link>
              </li>
              <li>
                <Link to="/shop/vase">Vase</Link>
              </li>
              <li>
                <Link to="/shop/lighting">Lighting</Link>
              </li>
              <li>
                <Link to="/shop/candle">Candle</Link>
              </li>
              <li>
                <Link to="/shop/art">Art</Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section className={styles.section}>
        <div>
          <h2>Products: {products.length} results</h2>
        </div>
        <div
          className={
            content.length > 1 ? styles["cards-grid"] : styles["cards-flexbox"]
          }
        >
          {content.length > 1 ? (
            content
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>
      </section>
    </main>
  );
}
export default Shop;
