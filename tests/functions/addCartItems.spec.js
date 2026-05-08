import { describe, it, expect } from "vitest";
import addCartItems from "../../src/functions/addCartItems.js";

describe("Add items to the cart", () => {
  it("Add an item if localStorage is empty", () => {
    const product = {
      name: "vase",
      id: 1,
    };

    const result = [
      {
        product: product,
        quantity: 1,
      },
    ];

    addCartItems(product, 1);

    expect(JSON.parse(localStorage.getItem("cartItems"))).toEqual(result);
  });

  it("Add the quantity of localStorage and product", () => {
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

    const result = [
      {
        product: product,
        quantity: 4,
      },
    ];

    localStorage.setItem("cartItems", JSON.stringify(data));

    addCartItems(product, 3);

    expect(JSON.parse(localStorage.getItem("cartItems"))).toEqual(result);
  });

  it("Add a new item if it is not in localStorage", () => {
    const product = {
      name: "vase",
      id: 1,
    };

    const data = [
      {
        product: {
          name: "chair",
          id: 2,
        },
        quantity: 1,
      },
    ];

    const result = [
      data[0],
      {
        product: product,
        quantity: 3,
      },
    ];

    localStorage.setItem("cartItems", JSON.stringify(data));
    addCartItems(product, 3);

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

    addCartItems(product, 1);

    expect(eventFired).toBe(true);
  });
});
