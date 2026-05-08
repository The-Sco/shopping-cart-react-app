import { describe, it, expect } from "vitest";
import removeCartItem from "../../src/functions/removeCartItem.js";

describe("Remove cart item", () => {
  it("Remove cart item", () => {
    const product = {
      name: "vase",
      id: 1,
    };
    const data = [
      {
        product: product,
        quantity: 1,
      },
    ];

    localStorage.setItem("cartItems", JSON.stringify(data));
    removeCartItem(product);

    expect(JSON.parse(localStorage.getItem("cartItems"))).toEqual([]);
  });

  it("Generate 'cartUpdated' event", () => {
    let eventFired = false;
    const product = {
      name: "vase",
      id: 1,
    };

    const data = [
      {
        product: product,
        quantity: 1,
      },
    ];

    localStorage.setItem("cartItems", JSON.stringify(data));
    window.addEventListener("cartUpdated", () => {
      eventFired = true;
    });

    removeCartItem(product);

    expect(eventFired).toBe(true);
  });
});
