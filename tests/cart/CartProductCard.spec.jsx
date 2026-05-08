import { describe, it, expect, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartProductCard from "../../src/components/cart/CartProductCard";

describe("Cart product card", () => {
  it("Display product data correctly", () => {
    const mock = vitest.fn();
    const data = {
      product: {
        name: "vase",
        id: 1,
        price: "$39.99",
        image: "../product/vase/vase1.webp",
      },
      quantity: 1,
    };

    render(<CartProductCard item={data} setCartItems={mock} />);

    expect(screen.getByRole("heading", { name: /vase/i })).toBeInTheDocument();
    expect(screen.getByText("$39.99")).toBeInTheDocument();
    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });

  it("Updates localStorage on number change", async () => {
    const user = userEvent.setup();
    const mock = vitest.fn();
    const data = [
      {
        product: {
          name: "vase",
          id: 1,
          price: "$39.99",
          image: "../product/furniture/furniture1.webp",
        },
        quantity: 1,
      },
    ];

    localStorage.setItem("cartItems", JSON.stringify(data));

    const result = [
      {
        product: {
          name: "vase",
          id: 1,
          price: "$39.99",
          image: "../product/furniture/furniture1.webp",
        },
        quantity: 2,
      },
    ];

    render(<CartProductCard item={data[0]} setCartItems={mock} />);

    const incrementButton = screen.getByTestId("increment-button");
    await user.click(incrementButton);

    expect(JSON.parse(localStorage.getItem("cartItems"))).toEqual(result);
  });
});
