import React, { useState } from "react";
import Footer from "./Footer";

import App00 from "./App00";
import App01 from "./App01";
import App02 from "./App02";
import App03 from "./App03";
import App04 from "./App04";
import App05 from "./App05";
import App06 from "./App06";
import App07 from "./App07";
import App08 from "./App08";
import App09 from "./App09";

import "./additionalStyles.css";

const Steps = [
  App00,
  App01,
  App02,
  App03,
  App04,
  App05,
  App06,
  App07,
  App08,
  App09
];
export default function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(9);
  const Step = Steps[currentStepIndex];
  return (
    <main>
      <header>
        <button
          onClick={() =>
            setCurrentStepIndex((stepIndex) =>
              stepIndex > 0 ? stepIndex - 1 : stepIndex
            )
          }
        >
          Previous Step
        </button>
        <span>
          Step {currentStepIndex} / {Steps.length - 1}
        </span>
        <button
          onClick={() =>
            setCurrentStepIndex((stepIndex) =>
              stepIndex < Steps.length - 1 ? stepIndex + 1 : stepIndex
            )
          }
        >
          Next Step
        </button>
      </header>
      <Step />
      <Footer />
    </main>
  );
}
