import React from 'react'
import styled from 'styled-components'
import { IoArrowForward } from 'react-icons/io5';

const NextArticle = () => {
    return (
        <NextStyle>
        <div className="nextarticle-info">
            <h4>Next Article</h4>
            <p>
            What is social marketing, and why is it different from digital marketing?
            </p>
            <IoArrowForward className="icons" />
        </div>    
        </NextStyle>
    )
}

export default NextArticle

const NextStyle = styled.div`
    width: 100%;

    .nextarticle-info{
        padding: 3rem 12%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
       
        h4 {
            font-size: 24px;
            font-weight: 400;
            color: #000000;
            text-transform: uppercase;
            margin-bottom: 1rem;
            text-align: center;
            line-height: 37px;
        }

        p {
            font-size: 40px;
            font-weight: 600;
            color: #000000;
            max-width: 697px    ;
            text-align: center;
            line-height: 61.6px;
            margin: 0 auto;
        }
        .icons{
            font-size: 3.5rem;
            color: #000000;
            cursor: pointer;
            text-align: center;
        }
    }
`