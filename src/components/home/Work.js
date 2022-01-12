import React from 'react'
import styled from 'styled-components'

const Work = () => {
    return (
        <StyledWork>
            <div className="introVideo">play</div>
            <div className="content">
                <h4>Our life’s work</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Purus ut facilisis etiam faucibus. Sem blandit magnis sem 
                    eu arcu pretium gravida vitae fermentum. Sit aliquam id 
                    sapien sit leo vitae, odio. Quis malesuada arcu.
                </p>
            </div>
        </StyledWork>
    )
}

export default Work

const StyledWork = styled.section`
    width: 100%;
    max-width: 100vw;
    min-height: 400px;
    background: #00111D;
    padding: 0 2rem;
    padding-bottom: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 10rem;
    position: relative;

    @media (max-width: 768px) {
            margin-top: 25rem;
        }

    .introVideo {
        width: 100%;
        max-width: 1037px;
        height: 28rem;
        background: #011F32;
        color: #fff;
        margin-top: -20rem;
        display: flex;
        align-items: center;
        justify-content: center;


        @media (max-width: 768px) {
            height: 20rem;
        }
    }

    .content {
        width: 100%;
        max-width: 1037px;
        margin-top: 5rem;
        color: #fff;
        display: flex;
        justify-content: space-between;

        @media (max-width: 768px) {
            flex-direction: column;
        }

        h4 {
            font-size: 3rem;
            font-weight: 200;
            color: #fff;
            max-width: 428px;
            width: 100%;

            @media (max-width: 768px) {
                font-size: 2rem;
            }
        }

        p {
            flex-grow: 1;
            font-size: 1rem;
            margin-top: .8rem;
            line-height: 2.5;

            @media (max-width: 768px) {
                font-size: .85rem;
            }
        }
    }
`