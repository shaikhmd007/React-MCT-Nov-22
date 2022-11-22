import React, { useEffect, useState } from "react";
import { RiToggleLine, RiToggleFill, RiHome4Line } from "react-icons/ri";
import "./Utils.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Utils = () => {
  // UseState Hook for dark/Light Mode
  const [mode, setMode] = useState(false);

  // state changing behahvior for ttoggle icon
  const [toggle, setToggle] = useState(false);

  // state change for real-time typing or changing preview
  const [typing, setTyping] = useState("");

  // state  for changing to uppercase
  const [upperCase, setUpperCase] = useState();

  // copy btntext state
  const [copy, setCopy] = useState(true);

  // Words  Counter State
  const [countWords, setCountWords] = useState(0);

  // Charachters Counter State
  const [countChars, setCountChars] = useState(0);

  // const [lowerCase, setLowerCase] = useState();

  // const [space, setSpace] = useState();

  //Copy to clipboard state
  // const [copyText, setCopyText] = useState("");

  // Clear state from text fields
  // const [clear, setClear] = useState("");

  //===>> 👇🏻 DarkMode / LightMode theme style Obj
  const theme = {
    darkMode: {
      backgroundColor: "black",
      color: "white",
      transition: "900ms",
    },
    lightMode: {
      backgroundColor: "white",
      color: "black",
      transition: "900ms",
    },
  };
  // created a Toggle Function
  function toggler() {
    setToggle((prevMode) => !prevMode);
    setMode((prevMode) => !prevMode);
  }

  //created for real-time updating states 👇🏻
  const StateTyping = (e) => {
    let typed = e.target.value;
    setTyping(typed);
    counterForChars();
    counterForWords();
  };

  // ===>> 👇🏻 created Uppercase fn  to convert toUpperCase
  const UpperCaseFun = () => {
    // e.preventDefault();
    let caseChange = typing.toUpperCase();
    if (caseChange === "") {
      alert("Enter text 1st to Test!!");
    } else {
      setUpperCase(caseChange);
      setTyping(caseChange);
    }
    // console.log();
  };

  //===>> 👇🏻  created method for LowerCase
  const LowerCase = () => {
    let caseChange = typing.toLowerCase();
    if (caseChange === "") {
      alert("Enter text to Test!!");
    } else {
      setUpperCase(caseChange);
      setTyping(caseChange);
    }
    // console.log(caseChange);
  };

  // ===>> 👇🏻 Removing Extra Spc
  const removeWhiteSpc = () => {
    const arr = typing.split(" ");
    const str = arr.join("");
    setTyping(str);
    // setSpace(e.target.value.replace(/\s+/g, " "));
    // console.log(setSpace);
  };

  //===>> 👇🏻 clr function
  const ClearAll = () => {
    // setClear("");
    setTyping("");
    // if (setTyping === "") {
    counterForWords();
    counterForChars();
    CopyToClipboard();
    // }
  };

  useEffect(() => {
    changeCopyBtnTxt();
    setCopy((prevMode) => !prevMode);
    // console.log(changeCopyBtnTxt);
  }, []);
  const changeCopyBtnTxt = () => {
    setCopy();
  };
  //  counter function for Words
  const counterForWords = () => {
    const wordsArr = typing.split(" ");
    setCountWords(wordsArr.length);

    // console.log(wordsArr.length);
    if (wordsArr.length === 1) {
      setCountWords(0);
    }
  };

  const counterForChars = () => {
    const charsArr = typing.split(" ");
    for (let i = 0; i < charsArr.length; i++) {
      setCountChars(typing.length);
    }
  };
  // Render On UI==>
  return (
    <div className="Main" style={mode ? theme.darkMode : theme.lightMode}>
      <div className="Nav">
        <span className="toggle">TextUtils</span>
        <a href="#">
          <RiHome4Line className="toggle" />
        </a>

        {/* Toggle and Conditional rendering */}
        <span className="toggle">
          {toggle ? (
            <RiToggleFill onClick={toggler} />
          ) : (
            <RiToggleLine
              onClick={toggler}
              // onChange={() => setMode((prevMode) => !prevMode)}
            />
          )}
          <span> DarkMode</span>
        </span>
      </div>

      <div className="Sub-Main">
        <div className="Body-Container">
          <h2>Enter the text to analyze below</h2>
          {/* input Area here */}
          <CopyToClipboard text={typing}>
            <textarea
              value={typing}
              placeholder="Start Typing..."
              onChange={StateTyping}
              // onChange={() => setCount(typing.length)}
              cols="30"
              rows="10"
              className="input-area"
            />
          </CopyToClipboard>

          {/* if (!="") {

          } */}

          {/*===>> 👇🏻  All Utility buttons started here */}

          {/* UpperCase Btn */}
          <button onClick={UpperCaseFun}>Convert to Uppercase</button>
          {/* Lowercase-Btn */}
          <button onClick={LowerCase}>Convert to Lowercase</button>
          {/* Remove-Spc-Btn */}
          <button onClick={removeWhiteSpc}>Remove Extra space</button>
          {/* Copy Button */}
          <button
            // onClick={CopyToClipboard}
            onClick={changeCopyBtnTxt}
            // onChange={() => setCopy((prevMode) => !prevMode)}
          >
            {copy}
            {copy ? "Text Copy" : "Copied📋"}
          </button>

          {/* Clear Button */}
          <button onClick={ClearAll}>Clear Text</button>
          <h2>Your text summary</h2>
          <h5>
            {" "}
            {countWords} words and {countChars} characters
          </h5>
          <p>0.008 Minutes read</p>
          <h2>Preview</h2>
          <p>Enter something in the textbox above to preview i t here</p>
          {/* <p value={{ upperCase }}></p> */}
          <p>{typing}</p>
        </div>
      </div>
    </div>
  );
};

export default Utils;

// <======= ((((((((((((((((((((((((( By Shaikh_md.)))))))))))))))))))))))))=======>
