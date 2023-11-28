import React, { useState } from "react";

const Accordions = ({ accordionData }) => {
  const [accordionIDs, setAccordionIDs] = useState([]);
  function toggleAccordion(newID) {
    return setAccordionIDs((prevAccID) => {
      return accordionIDs.includes(newID)
        ? accordionIDs.filter((acc_id) => acc_id !== newID)
        : [...prevAccID, newID];
    });
  }
  return (
    <div className="accordions">
      {accordionData?.map(({ id, title, desc }) => (
        <div className="accordion">
          <div className="accordion-title">
            <h3 onClick={() => toggleAccordion(id)}>{title}</h3>
          </div>
          {accordionIDs?.map(
            (acc_id) =>
              acc_id === id && (
                <div className="accordion-desc">
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
