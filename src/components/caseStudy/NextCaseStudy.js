import React from 'react'
import styled from 'styled-components'
import { IoArrowForward } from 'react-icons/io5';


const NextCaseStudy = () => {
    return (
        <NextCaseStyle>
          <div className="nextcase-info">
            <h4>Next Casestudy</h4>
            <p>
            Caelly
            </p>
            <IoArrowForward className="icons" />
        </div>    
        </NextCaseStyle>

        
    )
}

export default NextCaseStudy

const NextCaseStyle = styled.div`
    width: 100;

    .nextcase-info{
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