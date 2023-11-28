import { useState } from "react";

const AccordionItem = ({ id, name, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  const accordionHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <h2 onClick={accordionHandler} className="accordion-title">
        {name}
      </h2>
      {isOpen && <p className="accordion-desc">{body}</p>}
    </div>
  );
};

export default AccordionItem;
