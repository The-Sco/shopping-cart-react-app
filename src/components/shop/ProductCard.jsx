import LikeButton from "./LikeButton";
import CartButton from "./AddToCartButton";
import styles from "../../css/shop/productCard.module.css";

function ProductCard({ product, likedIDs, setLikedIDs }) {
  return (
    <div key={product.id} className={styles["product-card"]}>
      <div>
        <img src={product.image} alt="" />
      </div>
      <div>
        <div className={styles["card__info"]}>
          <p>{product.price}</p>
          <h3>{product.name}</h3>
        </div>
        <div className={styles["card__buttons-wrapper"]}>
          <LikeButton
            productId={product.id}
            likedIDs={likedIDs}
            setLikedIDs={setLikedIDs}
            className={styles["card__like-button"]}
          />
          <CartButton
            product={product}
            className={styles["card__cart-button"]}
          />
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
