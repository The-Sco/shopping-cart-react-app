import { describe, it, expect } from "vitest";
import changeCartItems from "../../src/functions/changeCartItems.js";

describe("Change items in cart", () => {
  it("Replace product quantity from localStorage to passed value", () => {
    const product = {
      name: "vase",
      id: 5,
    };
    const data = [
      {
        product: product,
        quantity: 1,
      },
    ];

    const result = [
      {
        product: product,
        quantity: 5,
      },
    ];

    localStorage.setItem("cartItems", JSON.stringify(data));
    changeCartItems(product, 5);

    expect(JSON.parse(localStorage.getItem("cartItems"))).toEqual(result);
  });

  it("Generate 'cartUpdated' event", () => {
    let eventFired = false;
    const product = {
      name: "vase",
    };

    window.addEventListener("cartUpdated", () => {
      eventFired = true;
    });

    changeCartItems(product, 1);

    expect(eventFired).toBe(true);
  });
});
