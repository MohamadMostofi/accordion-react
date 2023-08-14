import React from "react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const data = [
  {
    id: 1,
    title: "Accordion 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae officia consequuntur ipsam laboriosam, veniam maxime alias corrupti libero commodi esse quam mollitia. Explicabo enim possimus itaque, inventore vel quam?",
  },
  {
    id: 2,
    title: "Accordion 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae officia consequuntur ipsam laboriosam, veniam maxime alias corrupti libero commodi esse quam mollitia. Explicabo enim possimus itaque, inventore vel quam?",
  },
  {
    id: 3,
    title: "Accordion 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae officia consequuntur ipsam laboriosam, veniam maxime alias corrupti libero commodi esse quam mollitia. Explicabo enim possimus itaque, inventore vel quam?",
  },
];

function Accordion() {
  const [open, setOpen] = useState(null);

  const handleOpen = (id) => {
    setOpen(id === open ? null : id);
  };
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          //   setOpen={setOpen}
          onOpen={handleOpen}
          open={open}
        />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item, setOpen, open, onOpen }) {
  const isOpen = item.id === open;

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div className="accordion-item__header" onClick={() => onOpen(item.id)}>
        <div>{item.title}</div>
        <ChevronDownIcon
          className="accordion-item__chevron"
          //   style={{
          //     width: "1.2rem",
          //     transition: "all 0.2s ease-out",
          //     rotate: isOpen ? "180deg" : "0deg",
          //   }}
        />
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
}
