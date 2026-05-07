import LikeButton from "./LikeButton";
import CartButton from "./AddToCartButton";
import styles from "../../css/shop/productCard.module.css";

function ProductCard({
  product,
  likedIDs,
  setLikedIDs,
  setModalOpen,
  setSelectedProduct,
}) {
  return (
    <div key={product.id} className={styles["product-card"]}>
      <div>
        <img
          data-testid="product-card-image"
          src={product.image}
          alt=""
          role="presentation"
        />
      </div>
      <div>
        <div className={styles["card__info"]}>
          <p data-testid="product-card-price" aria-label="Price">
            {product.price}
          </p>
          <h3 data-testid="product-card-title">{product.name}</h3>
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
            setModalOpen={setModalOpen}
            setSelectedProduct={setSelectedProduct}
          />
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
