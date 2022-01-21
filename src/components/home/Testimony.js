import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimony = () => {

    const testRef = useRef(null); 
    const sl = useRef(gsap.timeline());

    useEffect(() => {
        sl.current = ScrollTrigger.batch(testRef.current, {
            onEnter: batch =>
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 5,
                    stagger: { each: 0.15, grid: [1, 3] },
                    overwrite: true
                  }),
                onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true }),
                onEnterBack: batch =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: batch =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
      // you can also define most normal ScrollTrigger values like start, end, etc.
      start: "20px bottom",
      end: "+=5000px" 
      
        })
    }, [])

    return (
        <TestimonyContainer>
            <div ref={testRef} className="testimony-content">
                <h4 className='testText'>testimonial</h4>
                <p className='testText'>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Tristique et feugiat ac, neque. Netus lobortis enim 
                    adipiscing iaculis quis malesuada ac.”
                </p>

                <div  className="testText testimony-author">Cameron Williamson</div>
            </div>
        </TestimonyContainer>
    )
}

export default Testimony

const TestimonyContainer = styled.section`
    width: 100%;
    max-width: 100vw;
    padding: 3rem 6%;

    @media (max-width: 768px) {
        padding: 3rem 2rem;
    }
    
    .testimony-content {
        max-width: 786px;
        margin: 3rem auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h4 {
            font-size: 2rem;
            font-weight: 500;
            color: #0D0C0C;
            margin-bottom: 1.5rem;
            text-transform: uppercase;
            text-align: center;

            @media (max-width: 768px) {
                font-size: 1.5rem;
            }
        }

        p {
            font-size: 2.5rem;
            font-weight: 200;
            color: #0D0C0C;
            line-height: 1.6;
            font-style: italic;
            margin-bottom: 2rem;
            text-align: center;

            @media (max-width: 768px) {
                font-size: 1rem;
            }
        }

        .testimony-author {
            font-size: 1.5rem;
            font-weight: 400;
            color: #0D0C0C;
            text-align: center;

            @media (max-width: 768px) {
                font-size: 1rem;
            }
        }
    }
`