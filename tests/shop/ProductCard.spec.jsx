import { describe, it, expect, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductCard from "../../src/components/shop/ProductCard";

describe("Product card", () => {
  it("Displays heading correctly", () => {
    const mock = [];
    const product = {
      id: 22,
      name: "Elegant Coffee Table",
      price: "$199.99",
      image: "../product/furniture/furniture2.webp",
      category: "Furniture",
    };
    const callBack = vitest.fn();

    render(
      <ProductCard
        product={product}
        likedIDs={mock}
        setModalOpen={callBack}
        setLikedIDs={callBack}
        setModalOpen={callBack}
      ></ProductCard>,
    );

    expect(screen.getByTestId("product-card-title").textContent).toBe(
      "Elegant Coffee Table",
    );
  });

  it("Displays product data correctly", () => {
    const mock = [];
    const product = {
      id: 22,
      name: "Elegant Coffee Table",
      price: "$199.99",
      image: "../product/furniture/furniture2.webp",
      category: "Furniture",
    };
    const callBack = vitest.fn();

    render(
      <ProductCard
        product={product}
        likedIDs={mock}
        setModalOpen={callBack}
        setLikedIDs={callBack}
        setModalOpen={callBack}
      ></ProductCard>,
    );

    expect(screen.getByTestId("product-card-image")).toBeInTheDocument();
    expect(screen.getByTestId("product-card-price").textContent).toBe(
      "$199.99",
    );
  });
});
