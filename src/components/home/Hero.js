import gsap from "gsap";
import React, { useEffect, useRef } from "react"
import styled from "styled-components";

const Hero = ({ title, subTitle, content, height }) => {

    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)

    useEffect(() => {
        gsap.from([line1, line2, line3], 0.8, {
            delay: 0.8,
            opacity: 0,
            rotate: "3deg",
            ease: "power3.out",
            y: 80,
            stagger: {
                amount: 0.4
            }
        })
    }, [line1, line2, line3])


    return (
        <StyledHero height={height}>
            <div className="dash" />
            <div className="content">
                <h5 ref={el => (line1 = el)}>
                    {subTitle}
                </h5>
                <h2 ref={el => (line2 = el)}> 
                    {title}
                </h2>
                {
                    content &&
                    <p ref={el => (line3 = el)}>
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
    max-width: 100vw;
    height: ${(p) => p.height ? p.height : 'calc(100vh - 8.125rem)'};
    padding: 11rem 15%;
    display: flex;
    justify-content: center;
    align-self: center;
    column-gap: 20px;

    @media (max-width: 768px) {
        padding: 2rem 2rem;
        height: ${(p) => p.height ? p.height : 'calc(100vh - 19rem)'};
    }

    .dash {
        width: 3rem;
        height: 2px;
        background: #00111D;

        @media (max-width: 768px) {
            display: none;
        }
    }   
    
    .content {
        flex-grow: 1;
        margin-left: 2rem;
        max-width: 958px;

        @media (max-width: 768px) {
            margin-left: 0;
            padding-top: 3rem;
        }

        h2 {
            font-size: 3.5rem;
            font-weight: 200;
            color: #00111D;
            text-transform: uppercase;
            line-height: 1.3;

            @media (max-width: 768px) {
                font-size: 2rem;
            }
        }

        h5 {
            font-weight: 200;
            color: #00111D;
            font-size: 1rem;
            text-transform: uppercase;
            margin-top: -.5rem;
            margin-bottom: 1rem;

            @media (max-width: 768px) {
                font-size: .85rem;
            }
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            color: #00111D;
            line-height: 1.5;
            max-width: 568px;
            margin-top: 1rem;

            @media (max-width: 768px) {
                font-size: .85rem;
            }
        }
    }
`