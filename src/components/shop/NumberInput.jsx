import styles from "../../css/custom-components/numberInput.module.css";

function NumberInput({ number, setNumber, name, className }) {
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
      setNumber(n);
    }

    if (numbers.includes(key)) {
      const result = Number(String(number) + key);
      setNumber(result);
    }
    return;
  };

  return (
    <div aria-label={name} className={`${styles.quantity} ${className}`}>
      <button
        data-testid="decrement-button"
        className="number-input__decrement"
        aria-label="Minus 1"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        className="number-input"
        type="text"
        inputMode="numeric"
        pattern="\d*"
        value={number}
        onKeyDown={handleChange}
        readOnly
      />
      <button
        data-testid="increment-button"
        className="number-input__increment"
        aria-label="Plus 1"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}

export default NumberInput;
