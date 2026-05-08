import { describe, it, expect, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LikeButton from "../../src/components/reusable/LikeButton";

describe("Like button", () => {
  it("adds item ID to localStorage when liked", async () => {
    const user = userEvent.setup();
    const productId = 12;
    const likedIds = [];
    const setLikedIDs = vitest.fn();

    render(
      <LikeButton
        productId={productId}
        likedIDs={likedIds}
        setLikedIDs={setLikedIDs}
      ></LikeButton>,
    );

    const likeButton = screen.getByRole("button");
    await user.click(likeButton);

    const localStorageIDs = JSON.parse(localStorage.getItem("likedProducts"));
    expect(localStorageIDs.length).toBe(1);
  });

  it("removes item ID from localStorage when unliked", async () => {
    const user = userEvent.setup();
    const productId = 12;
    const likedIds = [productId];
    const setLikedIDs = vitest.fn();

    localStorage.setItem("likedProducts", JSON.stringify[productId]);

    render(
      <LikeButton
        productId={productId}
        likedIDs={likedIds}
        setLikedIDs={setLikedIDs}
      ></LikeButton>,
    );

    const likeButton = screen.getByRole("button");
    await user.click(likeButton);

    const localStorageIDs = JSON.parse(localStorage.getItem("likedProducts"));
    expect(localStorageIDs.length).toBe(0);
  });

  it("Calls setLikedIds callback on click", async () => {
    const user = userEvent.setup();
    const productId = 12;
    const likedIds = [];
    const setLikedIDs = vitest.fn();

    render(
      <LikeButton
        productId={productId}
        likedIDs={likedIds}
        setLikedIDs={setLikedIDs}
      ></LikeButton>,
    );

    const likeButton = screen.getByRole("button");
    await user.click(likeButton);

    expect(setLikedIDs).toBeCalled();
  });
});
