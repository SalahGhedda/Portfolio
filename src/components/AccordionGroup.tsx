import { Fragment, SetStateAction, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

interface Props {
  bodies: string[];
  headings: string[];
}

function AccordionGroup({ bodies, headings }: Props) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      {bodies.map((body, index) => (
        <Accordion
          className="bg-slate-300 border border-blue-gray-100 px-4 rounded-lg mb-5 ml-12 mt-5 w-2/3"
          open={open === index + 1}
        >
          <AccordionHeader
            className={`font-bold border-b-0 transition-colors ${
              open === index + 1 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
            onClick={() => handleOpen(index + 1)}
          >
            {headings[index]}
          </AccordionHeader>
          <AccordionBody className="text-base font-normal pt-0">
            {body}
          </AccordionBody>
        </Accordion>
      ))}
    </Fragment>
  );
}

export default AccordionGroup;
