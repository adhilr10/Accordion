import getAccordionData from "./AccordionData";
import AccordionItem from "./AccordionItem";

const AccordionContainer = () => {
  const data = getAccordionData();

  return (
    <div className="accordions">
      {data?.map((accordionItemData) => (
        <AccordionItem {...accordionItemData} key={accordionItemData.id} />
      ))}
    </div>
  );
};

export default AccordionContainer;
