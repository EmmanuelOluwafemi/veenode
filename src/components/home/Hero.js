import React from "react"
import styled from "styled-components";

const Hero = ({ title, subTitle, content }) => {
    return (
        <StyledHero>
            <div className="dash" />
            <div className="content">
                <h5>
                    {subTitle}
                </h5>
                <h2> 
                    {title}
                </h2>
                {
                    content &&
                    <p>
                        {content}
                    </p>
                }
            </div>
        </StyledHero>
    )
} 

export default Hero;

const StyledHero = styled.div`
    width: 100%;
    height: calc(100vh - 8.125rem);
   /* height: 30%; */
    padding: 3rem 12%;
    display: flex;
    align-items: flex-start;
    padding-top: 8rem;

    .dash {
        width: 3rem;
        height: 4px;
        background: #00111D;
    }   
    
    .content {
        flex-grow: 1;
        margin-left: 2rem;
        max-width: 958px;

        h2 {
            font-size: 3.5rem;
            font-weight: 600;
            color: #00111D;
            text-transform: uppercase;
            line-height: 1.3;
        }

        h5 {
            font-weight: 600;
            color: #00111D;
            font-size: 1rem;
            text-transform: uppercase;
            margin-top: -.5rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            color: #00111D;
            line-height: 1.5;
            max-width: 568px;
            margin-top: 1rem;
        }
    }
`