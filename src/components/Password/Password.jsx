import React, { useState } from "react";
import "./Password.css";
import copy_icon from "../../assets/copy.png";
import generate_icon from "../../assets/generate.png";

const Password = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(15);
  const [upperCaseInclude, setUpperCaseInclude] = useState(true);
  const [lowerCaseInclude, setLowerCaseInclude] = useState(true);
  const [numbersInclude, setNumbersInclude] = useState(true);
  const [symbolsInclude, setSymbolsInclude] = useState(true);

  const isAtLeastOneOptionSelected = () => {
    return (
      upperCaseInclude || lowerCaseInclude || numbersInclude || symbolsInclude
    );
  };

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "@#$%^&*()_+~|{}[]<>/-=";

  function createPassword() {
    let allChars = "";
    let newPassword = "";

    if (upperCaseInclude) {
      allChars += upperCase;
      newPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    }

    if (lowerCaseInclude) {
      allChars += lowerCase;
      newPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }

    if (numbersInclude) {
      allChars += number;
      newPassword += number[Math.floor(Math.random() * number.length)];
    }

    if (symbolsInclude) {
      allChars += symbol;
      newPassword += symbol[Math.floor(Math.random() * symbol.length)];
    }

    while (length > newPassword.length) {
      newPassword += allChars[Math.floor(Math.random() * allChars.length)];
    }

    setPassword(newPassword);
  }

  function copyPassword() {
    navigator.clipboard.writeText(password);
  }

  return (
    <div className="password-generator">
      <h1>
        Generate a <br />
        <span>Random Password</span>
      </h1>
      <div className="password-display">
        <input type="text" id="password" value={password} readOnly />
        <img
          onClick={() => copyPassword()}
          src={copy_icon}
          alt="Copy Icon Image"
          class="src"
        />
      </div>
      <button
        onClick={() => createPassword()}
        disabled={!isAtLeastOneOptionSelected()}
      >
        <img src={generate_icon} alt="Generate Icon Image" />
        Generate Password
      </button>

      <div className="password-options">
        <div className="password-length-field">
          <label htmlFor="passwordLength">Password Length</label>
          <input
            id="passwordLength"
            type="number"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>
        <div className="option-field">
          <input
            type="checkbox"
            id="uppercase"
            checked={upperCaseInclude}
            onChange={(e) => setUpperCaseInclude(e.target.checked)}
          />
          <label htmlFor="uppercase">Include Uppercase</label>
        </div>
        <div className="option-field">
          <input
            type="checkbox"
            id="lowercase"
            checked={lowerCaseInclude}
            onChange={(e) => setLowerCaseInclude(e.target.checked)}
          />
          <label htmlFor="lowercase">Include Lowercase</label>
        </div>
        <div className="option-field">
          <input
            type="checkbox"
            id="numbers"
            checked={numbersInclude}
            onChange={(e) => setNumbersInclude(e.target.checked)}
          />
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="option-field">
          <input
            type="checkbox"
            id="symbols"
            checked={symbolsInclude}
            onChange={(e) => setSymbolsInclude(e.target.checked)}
          />
          <label htmlFor="symbols">Include Symbols</label>
        </div>
      </div>
    </div>
  );
};

export default Password;
