import React from 'react'
import styled from 'styled-components'

const OutroContent = () => {
    return (
        <OutroContentStyle>
             <div className="outcome-box">
            <div className="outcome-text"> 
            <p>Outcome</p>
            </div>
            <div className="outcome-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maecenas massa euismod at id. Quam ipsum augue lobortis ut nulla dui porttitor massa enim. Risus, vulputate lectus scelerisque scelerisque. 
            </div>
            </div>
            <div className="blueSection" />
            <div className="blueSection" />
            <div className="blueSection" />
            <div className="outcome-box">
            <div className="outcome-text"> 
            <p>Working with global internal
                and external teams</p>
            </div>
            <div className="outcome-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maecenas massa euismod at id. Quam ipsum augue lobortis ut nulla dui porttitor massa enim. Risus, vulputate lectus scelerisque scelerisque. 
            </div>
            </div>
            <div className="blueSection" />
            <div className="blueSection" />

        </OutroContentStyle>
    )
}

export default OutroContent

const OutroContentStyle = styled.div`
    width: 100%;


    .blueSection {
        width: 100%;
        height: 680px;
        background:#011F32;
        margin: 3rem 0;
    }

    .outcome-box{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        margin-top: 20px;
        padding:  6.438rem 12.5rem;
        
        @media (max-width: 768px) {
            grid-template-columns: 100%;
            padding: 3rem 2rem;
        }
        
        .outcome-text{
        font-size: 40px;
        font-weight: normal;
        line-height: 60px;
    }
        .outcome-details{
            font-size: 1.5rem;
            font-weight: normal;
            line-height: 2rem;
            letter-spacing: .03;

            @media (max-width: 768px) {
                font-size: 1rem;
                line-height: 1.5;
            }
        }
   
    }
    
`