import { describe, it, expect, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RemoveItemButton from "../../src/components/cart/RemoveItemButton";

describe("Remove item button", () => {
  it("Remove an item from localSrorage on click", async () => {
    const user = userEvent.setup();
    const mock = vitest.fn();
    const data = [
      {
        product: {
          name: "vase",
        },
        quantity: 1,
      },
    ];

    localStorage.setItem("cartItems", JSON.stringify(data));

    render(<RemoveItemButton product={data[0].product} setCartItems={mock} />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(JSON.parse(localStorage.getItem("cartItems"))).toEqual([]);
  });
});
