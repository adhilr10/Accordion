import { useState } from "react";
import "./App.scss";
import Accordions from "./components/Accordion";
import AccordionContainer from "./components/AccordionContainer";

function App() {
  return (
    <div>
      <Accordions>
        <AccordionContainer />
      </Accordions>
    </div>
  );
}

export default App;
