import React from 'react'
import styled from 'styled-components'

const VisualContent = () => {
    return (
        <VisualContentStyle>
              <div className="visual1box">
                <div className="vis1text">
                <h4 className="vis1">Visual 1</h4>
                </div>
                <div className="vis1blue">
                </div>
            </div>

            <div className="blueSection" />
            <div className="visual1box">
                <div className="vis1text">
                <h4 className="vis1">Visual 2</h4>
                </div>
                <div className="vis1blue">
                </div>
            </div>
            <div className="blueSection" />
           
        </VisualContentStyle>
            
    )
}

export default VisualContent
const VisualContentStyle = styled.div`
    width: 100%;
    
    .visual1box{
        width: 100%;
        height: 564px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 3rem 0;
        @media (max-width: 768px) {
                grid-template-columns: repeat(1, 1fr);
        }

        .vis1text{
            width: 100%;
            min-height: 20rem;
            text-align: center;
            font-weight: 700;
            font-size: 2.5rem;
            line-height: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .vis1blue{
            background-color: #011F32;
            height: 564px;
        }
    }
    .blueSection {
        width: 100%;
        height: 680px;
        background:#011F32;
        margin: 3rem 0;
    }

   
   

`