function LikeButton({ productId, likedIDs, onLike, className }) {
  const isLiked = likedIDs.includes(productId);

  const handleClick = () => {
    onLike(productId);
  };

  return (
    <button onClick={handleClick} className={className}>
      {isLiked ? (
        <i className="fa-solid fa-heart"></i>
      ) : (
        <i className="fa-regular fa-heart"></i>
      )}
    </button>
  );
}

export default LikeButton;
