import React, {Fragment} from 'react';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';

const FaqContent = [
    {
        title: 'What is web hosting?',
        desc: `They not only understand what I say but read between the lines and also give
        me ideas of my own. AI technology is perfect for best business solutions.`,
        expand: 'a'
    }, {
        title: 'How do you weigh different criteria in your process?',
        desc: `They not only understand what I say but read between the lines and also give
        me ideas of my own. AI technology is perfect for best business solutions.`,
        expand: 'b'
    }, {
        title: 'What can I use to build my website?',
        desc: `They not only understand what I say but read between the lines and also give
        me ideas of my own. AI technology is perfect for best business solutions.`,
        expand: 'c'
    }, {
        title: 'If I already have a website, can I transfer it to your web hosting?',
        desc: `They not only understand what I say but read between the lines and also give
        me ideas of my own. AI technology is perfect for best business solutions.`,
        expand: 'd'
    }, {
        title: 'How can I accept credit cards online?',
        desc: `They not only understand what I say but read between the lines and also give
        me ideas of my own. AI technology is perfect for best business solutions.`,
        expand: 'e'
    }
]

const Faq = () => {
    return (
        <Fragment>
            <Accordion
                className="accordion-style-one"
                preExpanded={["d"]}
                allowZeroExpanded>
                {FaqContent.map((item, i) => (
                    <AccordionItem className="accordion-item" key={i} uuid={item.expand}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <button className="accordion-button" type="button">
                                    {item.title}
                                </button>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion-body fadeInUp">
                            <p>
                                {item.desc}
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Fragment>
    )
}

export default Faq