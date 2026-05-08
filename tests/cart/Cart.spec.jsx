import { describe, it, expect, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Cart from "../../src/components/cart/Cart";

vitest.doMock("../../src/components/cart/CartProductCard", ({ product }) => {
  return <div key={product.id}>{product.name}</div>;
});

describe("Hero", () => {
  it("Displays the number of the items in localStorage correctly", () => {
    const data = [
      {
        product: {
          name: "vase",
          id: 1,
        },
      },
      {
        product: {
          name: "vase",
          id: 2,
        },
      },
      {
        product: {
          name: "vase",
          id: 3,
        },
      },
    ];

    localStorage.setItem("cartItems", JSON.stringify(data));

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /cart: 3 items/i }),
    ).toBeInTheDocument();
  });
});

describe("Cards grid", () => {
  it("Display cards", () => {
    const data = [
      {
        product: {
          name: "vase",
          id: 1,
        },
      },
      {
        product: {
          name: "chair",
          id: 2,
        },
      },
      {
        product: {
          name: "sofa",
          id: 3,
        },
      },
    ];

    localStorage.setItem("cartItems", JSON.stringify(data));

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
    );

    expect(screen.getByText(/vase/i)).toBeInTheDocument();
    expect(screen.getByText(/chair/i)).toBeInTheDocument();
    expect(screen.getByText(/sofa/i)).toBeInTheDocument();
  });

  it("Display message if there is no items in cart", () => {
    const data = [];
    localStorage.setItem("cartItems", JSON.stringify(data));

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
  });
});
