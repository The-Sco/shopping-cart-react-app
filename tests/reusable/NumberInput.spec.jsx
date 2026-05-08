import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberInput from "../../src/components/reusable/NumberInput";
import { useState } from "react";

function Wrapper({ initialNumber = 1 }) {
  const [number, setNumber] = useState(initialNumber);

  return <NumberInput number={number} setNumber={setNumber}></NumberInput>;
}

describe("Number input", () => {
  it("Decrement button works correctly", async () => {
    const user = userEvent.setup();

    render(<Wrapper initialNumber={5}></Wrapper>);

    const decrementButton = screen.getByTestId("decrement-button");
    await user.click(decrementButton);

    expect(screen.getByRole("textbox").value).toBe("4");
  });

  it("Increment button works correctly", async () => {
    const user = userEvent.setup();

    render(<Wrapper initialNumber></Wrapper>);

    const incrementButton = screen.getByTestId("increment-button");
    await user.click(incrementButton);

    expect(screen.getByRole("textbox").value).toBe("2");
  });

  it("does not allow the user to decrease the number below 1", async () => {
    const user = userEvent.setup();

    render(<Wrapper></Wrapper>);

    const decrementButton = screen.getByTestId("decrement-button");
    await user.click(decrementButton);
    await user.click(decrementButton);
    await user.click(decrementButton);

    expect(screen.getByRole("textbox").value).toBe("1");
  });

  it("doesn't allow the user to enter letters and symbols", async () => {
    const user = userEvent.setup();

    render(<Wrapper></Wrapper>);

    const input = screen.getByRole("textbox");
    await user.type(input, "test ; : $");

    expect(input.value).toBe("1");
  });

  it("allow the user to enter numbers", async () => {
    const user = userEvent.setup();

    render(<Wrapper></Wrapper>);

    const input = screen.getByRole("textbox");
    await user.type(input, "0");

    expect(input.value).toBe("10");
  });
});
