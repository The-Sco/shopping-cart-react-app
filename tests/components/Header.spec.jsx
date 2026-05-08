import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router";
import userEvent from "@testing-library/user-event";
import Header from "../../src/components/Header.jsx";

describe("Header component", () => {
  it("Renders heading correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading").textContent).toMatch(/dream decor/i);
  });

  it("Navigates to home", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink.getAttribute("href")).toBe("/home");
  });

  it("Navigates to shop", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const shopLink = screen.getByRole("link", { name: /shop/i });
    expect(shopLink.getAttribute("href")).toBe("/shop");
  });

  it("Navigates to cart", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const cartLink = screen.getByRole("link", { name: /cart/i });
    expect(cartLink.getAttribute("href")).toBe("/cart");
  });
});

describe("Navigation interactions", () => {
  it("clicking home link renders homepage content", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Header />
        <Routes>
          <Route path="/home" element={<div>Welcome Home</div>} />
          <Route path="/shop" element={<div>Shop Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText(/shop page/i)).toBeInTheDocument();

    const homeLink = screen.getByRole("link", { name: /home/i });
    await user.click(homeLink);

    expect(screen.getByText(/welcome home/i)).toBeInTheDocument();
  });
});

describe("Cart items quanity", () => {
  it("Display nothing if there is no items in the localSrorage", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.queryByTestId("cart-items-quantity")).not.toBeInTheDocument();
  });

  it("Display the number correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const mock = [
      {
        product: "chair",
        quantity: 2,
      },
      {
        product: "chair",
        quantity: 2,
      },
      {
        product: "chair",
        quantity: 2,
      },
    ];

    localStorage.setItem("cartItems", JSON.stringify(mock));
    fireEvent(window, new CustomEvent("cartUpdated"));

    const cartItemsNumber = screen.getByTestId("cart-items-quantity");
    expect(cartItemsNumber.textContent).toBe("3");
  });

  it("Updates the quantity correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    let mock = [
      {
        product: "chair",
        quantity: 2,
      },
    ];

    localStorage.setItem("cartItems", JSON.stringify(mock));
    fireEvent(window, new CustomEvent("cartUpdated"));

    const cartItemsNumber = screen.getByTestId("cart-items-quantity");
    expect(cartItemsNumber.textContent).toBe("1");

    mock = [
      {
        product: "chair",
        quantity: 2,
      },
      {
        product: "chair",
        quantity: 2,
      },
    ];

    localStorage.setItem("cartItems", JSON.stringify(mock));
    fireEvent(window, new CustomEvent("cartUpdated"));

    expect(cartItemsNumber.textContent).toBe("2");
  });
});
