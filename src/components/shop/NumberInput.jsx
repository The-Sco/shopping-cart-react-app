function NumberInput({ number, setNumber }) {
  const numbers = "1234567890";
  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    if (number <= 1) return;
    setNumber(number - 1);
  };

  const handleChange = ({ key }) => {
    if (key === "Backspace") {
      const array = String(number).split("");
      const lastIndex = array.length - 1;
      const string = array
        .map((s, index) => {
          if (index === lastIndex) return;
          return s;
        })
        .join("");
      const n = Number(string);
      const result = n > 0 ? n : 1;
      setNumber(result);
    }

    if (numbers.includes(key)) {
      const result = Number(String(number) + key);
      setNumber(result);
    }
    return;
  };

  return (
    <div>
      <button name="Minus 1" onClick={handleDecrement}>
        -
      </button>
      <input
        type="text"
        inputMode="numeric"
        name="Quantity"
        pattern="\d*"
        value={number}
        onKeyDown={handleChange}
        readOnly
      />
      <button name="Plus 1" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default NumberInput;
