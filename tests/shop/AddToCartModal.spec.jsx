import { describe, it, expect, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddToCartModal from "../../src/components/shop/AddToCartModal";

describe("Add to cart modal", () => {
  it("Displays heading correctly", () => {
    const setModalOpen = vitest.fn();
    const product = {
      name: "Product",
      price: "$299.99",
      image: "../product/furniture/furniture1.webp",
      id: 1,
    };

    render(
      <AddToCartModal
        product={product}
        setModalOpen={setModalOpen}
      ></AddToCartModal>,
    );

    expect(screen.getByRole("heading").textContent).toBe("Product");
  });

  it("Displays product data correctly", () => {
    const setModalOpen = vitest.fn();
    const product = {
      name: "Product",
      price: "$299.99",
      image: "../product/furniture/furniture1.webp",
      id: 1,
    };

    render(
      <AddToCartModal
        product={product}
        setModalOpen={setModalOpen}
      ></AddToCartModal>,
    );

    expect(screen.getByRole("paragraph").textContent).toBe("$299.99");
    expect(screen.getByTestId("modal-image")).toBeInTheDocument();
  });

  it("Adds product to localStorage", async () => {
    const user = userEvent.setup();
    const setModalOpen = vitest.fn();
    const product = {
      name: "Product",
      price: "$299.99",
      image: "../product/furniture/furniture1.webp",
      id: 1,
    };

    const result = [
      {
        product: product,
        quantity: 1,
      },
    ];

    render(
      <AddToCartModal
        product={product}
        setModalOpen={setModalOpen}
      ></AddToCartModal>,
    );

    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    await user.click(addToCartButton);

    const localStorageData = JSON.parse(localStorage.getItem("cartItems"));
    expect(localStorageData).toEqual(result);
  });

  it("Set shomModal to false on 'continue shopping' button click", async () => {
    let showModal = true;
    const user = userEvent.setup();
    const setModalOpen = () => (showModal = false);
    const product = {
      name: "Product",
      price: "$299.99",
      image: "../product/furniture/furniture1.webp",
      id: 1,
    };

    render(
      <AddToCartModal
        product={product}
        setModalOpen={setModalOpen}
      ></AddToCartModal>,
    );

    const continueShoppingButton = screen.getByRole("button", {
      name: /continue shopping/i,
    });

    await user.click(continueShoppingButton);

    expect(showModal).toBe(false);
  });

  it("Set shomModal to false on overlay click", async () => {
    let showModal = true;
    const user = userEvent.setup();
    const setModalOpen = () => (showModal = false);
    const product = {
      name: "Product",
      price: "$299.99",
      image: "../product/furniture/furniture1.webp",
      id: 1,
    };

    render(
      <AddToCartModal
        product={product}
        setModalOpen={setModalOpen}
      ></AddToCartModal>,
    );

    const continueShoppingButton = screen.getByTestId("modal-overlay");

    await user.click(continueShoppingButton);

    expect(showModal).toBe(false);
  });
});
