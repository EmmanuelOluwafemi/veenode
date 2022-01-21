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
    const sl = useRef(gsap.timeline());


    useEffect(() => {
        sl.current = ScrollTrigger.batch(images.current, {
            onEnter: batch =>
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    stagger: { each: 0.15, grid: [1, 3] },
                    overwrite: true
                  }),
                onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true }),
                onEnterBack: batch =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: batch =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    //  you can also define most normal ScrollTrigger values like start, end, etc.
      start: "20px bottom",
      end: "+=5000px" 
        })

        sl.current = ScrollTrigger.batch(info.current, {
            onEnter: batch =>
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    stagger: { each: 0.15, grid: [1, 3] },
                    overwrite: true
                  }),
                onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true }),
                onEnterBack: batch =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: batch =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    //  you can also define most normal ScrollTrigger values like start, end, etc.
      start: "20px bottom",
      end: "+=5000px" 
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