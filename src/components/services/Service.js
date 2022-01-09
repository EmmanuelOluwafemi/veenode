import React from 'react'

import styled from 'styled-components'
import Arcodion from '../Arcodion'

const Service = () => {
    return (
        <StyledService>
            <h5>Our Services</h5>
            <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Arcu morbi velit adipiscing viverra urna.
            </h2>

            <Arcodion />
            <Arcodion />
            <Arcodion />
        </StyledService>
    )
}

export default Service

const StyledService = styled.section`
    width: 100%;
    max-width: 100vw;
    background: #fff;
    padding: 6rem 12%;
    padding-bottom: 3rem;

    @media (max-width: 768px) {
        padding: 3rem 2rem;
    }

    h5 {
        font-size: 1.5rem;
        font-weight: 500;
        color: #00111D;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 3rem;
        font-weight: 400;
        line-height: 1.4;
        color: #00111D;
        margin-bottom: 4rem;
        max-width: 958px;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }
`