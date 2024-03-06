import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

  const accordionData = [
    {
        question: "How much is it to rent an office space?",
        answer: "We have a range of price points which vary depending on the type of office space you need. These are determined by its size, location, and where it's situated in the center (by the windows or in the interior of the building). Our office space experts can help you find the right rental solution for your needs at the right price."
    },
    {
        question: "Can you rent office space to yourself?",
        answer: "We have a range of price points which vary depending on the type of office space you need. These are determined by its size, location, and where it's situated in the center (by the windows or in the interior of the building). Our office space experts can help you find the right rental solution for your needs at the right price."
    },
    {
        question: "Can you rent office space to yourself?",
        answer: "We have a range of price points which vary depending on the type of office space you need. These are determined by its size, location, and where it's situated in the center (by the windows or in the interior of the building). Our office space experts can help you find the right rental solution for your needs at the right price."
    },
    {
        question: "Can you rent office space to yourself?",
        answer: "We have a range of price points which vary depending on the type of office space you need. These are determined by its size, location, and where it's situated in the center (by the windows or in the interior of the building). Our office space experts can help you find the right rental solution for your needs at the right price."
    },
  ]

const Accorddion = ()=>{
    return(
            <>
                <Accordion allowToggle className="w-[515px] h-fit">
                    {
                        accordionData.map(data=>(
                            <AccordionItem> 
                                <h2>
                                <AccordionButton className="h-[86px]">
                                    <Box as="span" flex='1' textAlign='left'>
                                        {data.question}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    {data.answer}
                                </AccordionPanel>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </>
    );
}
export default Accorddion;