import React, {useEffect, useRef } from 'react'
import gsap from "gsap";
import styled from 'styled-components'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// images
import logo1 from "../../assets/images/logo1.png"
import logo2 from "../../assets/images/logo2.png"
import logo3 from "../../assets/images/logo3.png"
import logo4 from "../../assets/images/logo4.png"
import logo5 from "../../assets/images/logo5.png"

gsap.registerPlugin(ScrollTrigger);


const MoreInfo = () => {
    let images = useRef(null)
    let info = useRef(null)

    useEffect(() => {
        gsap.from(images.current, 0.8, {
            delay: 0.8,
            opacity: 0,
            rotate: "3deg",
            ease: "power3.out",
            y: 80,
           scrollTrigger:{
                id:"images",
                trigger: '.logoImg',
                start: "top center",
                stop: "bottom center",
                toggleActions: "play none none reverse",
              
           } 
        })

        gsap.from(info.current, 0.8, {
            delay: 0.8,
            opacity: 0,
            ease: "power3.out",
            y: 80,
            scrollTrigger:{
                id:"info",
                trigger: '.infoText',
                start: "top center",
                stop: "bottom center",
                toggleActions: "play none none reverse"
            }
        })

    }, [])

    return (
        <StyledMoreInfo>
            <div ref={images} className="logosContainer">
                <img src={logo1} className='logoImg' alt="companies logo" />
                <img src={logo2} className='logoImg' alt="companies logo" />
                <img src={logo3} className='logoImg' alt="companies logo" />
                <img src={logo4} className='logoImg' alt="companies logo" />
                <img src={logo5} className='logoImg' alt="companies logo" />
            </div>

            <div ref={info} className="moreInfoContainer">
                <div  className="heading infoText">Featured work</div>
                <div className="para infoText">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Purus ut facilisis etiam 
                    faucibus. Sem blandit magnis sem eu arcu 
                    pretium gravida vitae fermentum. Sit aliquam 
                    id sapien sit leo vitae, odio. 
                    Quis malesuada arcu.
                </div>
            </div>
        </StyledMoreInfo>
    )
}

export default MoreInfo

const StyledMoreInfo = styled.div`
    width: 100%;
    max-width: 100vw;
    background: #000C13;
    max-width: 100vw;
    min-height: 750px;
    padding: 5rem 0;

    @media (max-width: 768px) {
        margin-top: 50px;
    }

    .logosContainer {
        padding: 0 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 768px) {
            flex-wrap: wrap;
            gap: 1rem 0;

            img {
                width: 6rem;
                height: auto;
            }
        }
    }

    .moreInfoContainer {
        padding: 0 15%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        margin-top: 5rem;

        @media (max-width: 768px) {
            grid-template-columns: 100%;
        }

        .heading {
            font-size: 2.5rem;
            font-weight: 200;
            color: #fff;

            @media (max-width: 768px) {
                font-size: 2rem;
            }
        }
        
        .para {
            font-size: 1rem;
            font-weight: 400;
            color: #fff;
            line-height: 1.7;

            @media (max-width: 768px) {
                font-size: .85rem;
            }
        }
    }
`