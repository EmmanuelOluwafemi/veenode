import React from 'react'

import styled from 'styled-components'
import FaqAccordion from './FaqAccordion'

const Faq = () => {
    return (
        <StyledFaq>
            <h5>faqs</h5>
            <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Arcu morbi velit adipiscing viverra urna.
            </h2>

            <FaqAccordion />
            <FaqAccordion />
            <FaqAccordion />
        </StyledFaq>
    )
}

export default Faq

const StyledFaq = styled.section`
    width: 100%;
    max-width: 100vw;
    background: #011F32;
    padding: 6rem 12%;
    padding-bottom: 3rem;

    @media (max-width: 768px) {
        padding: 3rem 2rem;
    }

    h5 {
        font-size: 1.5rem;
        font-weight: 500;
        color: #FFF;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 3rem;
        font-weight: 400;
        line-height: 1.4;
        color: #FFF;
        margin-bottom: 4rem;
        max-width: 958px;


        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
`