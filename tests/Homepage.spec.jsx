import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router";
import userEvent from "@testing-library/user-event";
import Homepage from "../src/components/Homepage";

describe("Hero", () => {
  it("Displays heading correctly", () => {
    render(
      <MemoryRouter>
        <Homepage></Homepage>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "Decorate your Dream Space!" }),
    ).toBeInTheDocument();
  });

  it("Navigates to shop", () => {
    render(
      <MemoryRouter>
        <Homepage></Homepage>
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: "Shop now" });
    expect(link.getAttribute("href")).toBe("/shop");
  });

  it("Navigation interactions", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Homepage></Homepage>
        <Routes>
          <Route path="/shop" element={<div>Shop Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: "Shop now" });
    await user.click(link);

    expect(screen.getByText(/shop page/i)).toBeInTheDocument();
  });
});

describe("Top categories", () => {
  it("Displays heading correctly", () => {
    render(
      <MemoryRouter>
        <Homepage></Homepage>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "Top Categories" }),
    ).toBeInTheDocument();
  });

  it("Renders all categories from categories prop", () => {
    const mockCategories = [
      {
        id: 1,
        name: "Furniture",
        image: "../homepage/categories/furniture.webp",
      },
      {
        id: 2,
        name: "Vase",
        image: "../homepage/categories/furniture.webp",
      },
    ];

    render(
      <MemoryRouter>
        <Homepage categories={mockCategories}></Homepage>
      </MemoryRouter>,
    );

    const allLinks = screen.getAllByRole("link");

    // 1 in the hero + 2 categories
    expect(allLinks.length).toBe(3);

    expect(screen.getByRole("link", { name: "Furniture" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Vase" })).toBeInTheDocument();
  });
});

describe("Newsletter section", () => {
  it("Displays heading correctly", () => {
    render(
      <MemoryRouter>
        <Homepage></Homepage>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", {
        name: "Stay in Loop for Exclusive Offers!",
      }),
    ).toBeInTheDocument();
  });

  it("Allows user to type email in newsletter", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Homepage></Homepage>
      </MemoryRouter>,
    );

    const emailInput = screen.getByPlaceholderText(/Enter your email/i);

    await user.type(emailInput, "test@email.com");
    expect(emailInput.value).toBe("test@email.com");
  });
});
