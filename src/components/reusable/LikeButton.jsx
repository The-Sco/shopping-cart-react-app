function LikeButton({ productId, likedIDs, setLikedIDs, className }) {
  const isLiked = likedIDs.includes(productId);

  const onLike = (productId) => {
    let updatedLikedIDs;
    if (likedIDs.includes(productId)) {
      updatedLikedIDs = likedIDs.filter((id) => id !== productId);
    } else {
      updatedLikedIDs = [...likedIDs, productId];
    }
    localStorage.setItem("likedProducts", JSON.stringify(updatedLikedIDs));
    setLikedIDs(updatedLikedIDs);
  };

  const handleClick = () => {
    onLike(productId);
  };

  return (
    <button
      data-testid="like-button"
      aria-label="Like button"
      onClick={handleClick}
      className={className}
      data-liked={isLiked ? "liked" : "false"}
    >
      {isLiked ? (
        <i className="fa-solid fa-heart"></i>
      ) : (
        <i className="fa-regular fa-heart"></i>
      )}
    </button>
  );
}

export default LikeButton;
