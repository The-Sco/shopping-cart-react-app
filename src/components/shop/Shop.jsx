import { useParams, Link } from "react-router";
import { useState } from "react";
import getProducts from "../../data/products.js";
import LikeButton from "./LikeButton.jsx";
import CartButton from "./AddToCartButton.jsx";

function formatTitle(str) {
  const words = str.split("");
  words[0] = words[0].toUpperCase();
  return words.join("");
}

function Shop() {
  const [likedIDs, setLikedIDs] = useState(
    JSON.parse(localStorage.getItem("likedProducts")) || [],
  );
  const params = useParams();
  const category = params.category || "All";
  const products = getProducts(category);

  const handleLike = (productId) => {
    let updatedLikedIDs;
    if (likedIDs.includes(productId)) {
      updatedLikedIDs = likedIDs.filter((id) => id !== productId);
    } else {
      updatedLikedIDs = [...likedIDs, productId];
    }
    localStorage.setItem("likedProducts", JSON.stringify(updatedLikedIDs));
    setLikedIDs(updatedLikedIDs);
  };

  const content = products.map((product) => {
    return (
      <div key={product.id}>
        <div>
          <img src={product.image} alt="" />
        </div>
        <div>
          <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
          <div>
            <LikeButton
              productId={product.id}
              likedIDs={likedIDs}
              onLike={handleLike}
              className="like-button"
            />
            <CartButton product={product} className="cart-button" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <main>
      <section>
        <div>
          <h2>{formatTitle(category)}</h2>
        </div>
        <div>
          <nav>
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
      <section>
        <div>
          <h2>Products</h2>
        </div>
        <div>
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
