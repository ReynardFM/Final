import { useState } from "react";
import Nav from "./components/section4";
import BracketGenerator from "./components/section2";

/**
 * Brackets - Main page component for bracket generation
 * Manages the bracket count state and renders the generator interface
 */
export default function Brackets() {
  // State to track the current bracket count (initialized to 0)
  const [num, setNum] = useState(0);

  return (
    <div className="page brackets-page">
      {/* Persistent navigation bar */}
      <Nav />
      
      {/* 
        BracketGenerator component
        - Receives current count (num) and state setter (setNum)
        - Handles all bracket generation and display logic
      */}
      <BracketGenerator 
        num={num} 
        setNum={setNum} 
      />
    </div>
  );
}