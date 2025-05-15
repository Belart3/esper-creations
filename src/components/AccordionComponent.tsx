import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import PlusIcon from './PlusIcon';
import { Inter } from 'next/font/google';

const inter = Inter(
  { 
    subsets: ['latin'] ,
    variable: "--font-inter",
  }
)
type props = {
    question: string;
    answer: string;
};

export default function AccordionComponent(props: props) {
  return (
    <>
      <Accordion className='!shadow-none !border-none before:!hidden !m-0 !p-5 !rounded-[16px] md:!py-10 md:!px-4 [&_.Mui-expanded]:!m-0 [&_.MuiAccordionSummary-root]:p-0 [&_.MuiAccordionDetails-root]:p-0'>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls={props.question}
          id={props.question}
          expandIcon={<PlusIcon />}
          className='!m-0 !P-0 [&_.MuiAccordionSummary-content]:m-0 [&_.MuiAccordionSummary-content]:p-0'
        >
          <h3 className={`${inter.className} !text-[16px]/[24px] md:text-[18px]/[27px] !tracking-[-0.64px] !m-0 !p-0 text-black font-normal`}>
            {props.question}
          </h3>
        </AccordionSummary>
        <AccordionDetails className='!mt-5'>
          <p className={`${inter.className} text-[16px]/[24px] text-[#666666]`}>
            {props.answer}
          </p>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
