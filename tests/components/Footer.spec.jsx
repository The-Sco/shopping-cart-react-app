import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Footer from "../../src/components/Footer";

describe("Footer", () => {
  it("Display heading correctly", () => {
    render(
      <MemoryRouter>
        <Footer></Footer>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /Dream decor/i }),
    ).toBeInTheDocument();
  });

  it("Displays links correctly", () => {
    render(
      <MemoryRouter>
        <Footer></Footer>
      </MemoryRouter>,
    );

    expect(screen.getAllByRole("link").length).toBe(14);
  });
});
