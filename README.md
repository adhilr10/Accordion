# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



import React, { useState } from "react";

const Accordions = ({ accordionData }) => {
  const [accordionIDs, setAccordionIDs] = useState([]);
  function handleAccordion(newId) {
    setAccordionIDs((prevAccID)=> {
      return accordionIDs.includes(newId) ? accordionIDs.filter((acc_id)=> acc_id !== newId) : [...prevAccID, newId]
    });
  }
  return (
    <div className="accordions">
      {accordionData?.map(({ id, title, desc }) => (
        <div className="accordion" key={id}>
          <div className="accordion-title" onClick={() => handleAccordion(id)}>
            <h3>{title}</h3>
          </div>
          {accordionIDs?.map(
            (acc_id, index) =>
              acc_id === id && (
                <div className="accordion-description" key={index}>
                  <p>{desc}</p>
                </div>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordions;