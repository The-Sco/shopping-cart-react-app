import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router";
import userEvent from "@testing-library/user-event";
import Shop from "../../src/components/shop/Shop";

describe("Hero", () => {
  it("Displays heading correctly", () => {
    render(
      <MemoryRouter>
        <Shop></Shop>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /Category: all/i }),
    ).toBeInTheDocument();
  });

  it("Displays navigation correctly", () => {
    render(
      <MemoryRouter>
        <Shop></Shop>
      </MemoryRouter>,
    );

    expect(screen.getAllByRole("link").length).toBe(6);
  });

  it("renders correct heading based on URL parameters", () => {
    render(
      <MemoryRouter initialEntries={["/shop/Vase"]}>
        <Routes>
          <Route path="/shop/:category" element={<Shop />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /Category: Vase/i }),
    ).toBeInTheDocument();
  });

  it("updates heading when a category link is clicked", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/shop/all"]}>
        <Routes>
          <Route path="/shop/:category" element={<Shop />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText(/Category: all/i)).toBeInTheDocument();

    const link = screen.getByRole("link", { name: /Vase/i });
    await user.click(link);

    expect(
      screen.getByRole("heading", { name: /Category: Vase/i }),
    ).toBeInTheDocument();
  });
});
describe("Filters section", () => {
  it("renders the number of products correctly", () => {
    const data = {
      furniture: [
        {
          id: 1,
          name: "Modern Sofa",
          price: "$499.99",
          image: "../product/furniture/furniture1.webp",
          category: "Furniture",
        },
        {
          id: 2,
          name: "Elegant Coffee Table",
          price: "$199.99",
          image: "../product/furniture/furniture2.webp",
          category: "Furniture",
        },
      ],
    };

    render(
      <MemoryRouter initialEntries={["/shop/furniture"]}>
        <Routes>
          <Route path="/shop/:category" element={<Shop testData={data} />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /Products: 2 results/i }),
    ).toBeInTheDocument();
  });

  it("updates the number of products when a category is clicked", async () => {
    const data = {
      furniture: [
        {
          id: 1,
          name: "Modern Sofa",
          price: "$499.99",
          image: "../product/furniture/furniture1.webp",
          category: "Furniture",
        },
        {
          id: 3,
          name: "Elegant Coffee Table",
          price: "$199.99",
          image: "../product/furniture/furniture2.webp",
          category: "Furniture",
        },
      ],

      vase: [
        {
          id: 4,
          name: "Elegant Coffee Table",
          price: "$199.99",
          image: "../product/furniture/furniture2.webp",
          category: "Furniture",
        },
        {
          id: 5,
          name: "Elegant Coffee Table",
          price: "$199.99",
          image: "../product/furniture/furniture2.webp",
          category: "Furniture",
        },
        {
          id: 6,
          name: "Elegant Coffee Table",
          price: "$199.99",
          image: "../product/furniture/furniture2.webp",
          category: "Furniture",
        },
      ],
    };

    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/shop/all"]}>
        <Routes>
          <Route path="/shop/:category" element={<Shop testData={data} />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /products: 5/i }));

    const link = screen.getByRole("link", { name: /vase/i });
    await user.click(link);

    expect(screen.getByRole("heading", { name: /products: 3/i }));
  });
});

describe("Add to cart modal", () => {
  it("Open modal when the 'add to cart' button is clicked", async () => {
    const data = {
      furniture: [
        {
          id: 1,
          name: "Modern Sofa",
          price: "$499.99",
          image: "../product/furniture/furniture1.webp",
          category: "Furniture",
        },
      ],
    };

    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/shop/all"]}>
        <Routes>
          <Route path="/shop/:category" element={<Shop testData={data} />} />
        </Routes>
      </MemoryRouter>,
    );

    const addToCartButton = screen.getByTestId("add-to-cart-button");
    await user.click(addToCartButton);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("Closes the modal when the overlay is clicked", async () => {
    const data = {
      furniture: [
        {
          id: 1,
          name: "Modern Sofa",
          price: "$499.99",
          image: "../product/furniture/furniture1.webp",
          category: "Furniture",
        },
      ],
    };

    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/shop/all"]}>
        <Routes>
          <Route path="/shop/:category" element={<Shop testData={data} />} />
        </Routes>
      </MemoryRouter>,
    );

    const addToCartButton = screen.getByTestId("add-to-cart-button");
    await user.click(addToCartButton);

    const overlay = screen.getByTestId("modal-overlay");
    await user.click(overlay);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("Closes the modal when the 'continue shopping' button is clicked", async () => {
    const data = {
      furniture: [
        {
          id: 1,
          name: "Modern Sofa",
          price: "$499.99",
          image: "../product/furniture/furniture1.webp",
          category: "Furniture",
        },
      ],
    };

    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/shop/all"]}>
        <Routes>
          <Route path="/shop/:category" element={<Shop testData={data} />} />
        </Routes>
      </MemoryRouter>,
    );

    const addToCartButton = screen.getByTestId("add-to-cart-button");
    await user.click(addToCartButton);

    const contineShoppingButton = screen.getByRole("button", {
      name: /continue shopping/i,
    });
    await user.click(contineShoppingButton);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
