import React from 'react'
import styled from 'styled-components'

const IntroSection = () => {
    return (
        <IntroSectStyle>
            <div className="introImage">play </div>
                <div className="content">
                    <h1 className="text-hd">UNIQUELY STRONG. ONE Supportive team</h1>
                    <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu morbi velit adipiscing viverra urna.</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut facilisis etiam faucibus. Sem blandit magnis sem eu arcu pretium gravida vitae fermentum. Sit aliquam id sapien sit leo vitae, odio. Quis malesuada arcu.</p>    
                </div>

        </IntroSectStyle>
    )
}

export default IntroSection

const IntroSectStyle = styled.section`
        width: 100%;
        min-height: 700px;
        background: #00111D;
        padding: 0 6%;
        padding-bottom: 4rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        margin-top: 5rem;

        .introImage{
            width: 100%;
            max-width: 1037px;
            height: 28rem;
            background: #011F32;
            color: #fff;
            margin-top: -14rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    .content{
        width: 100%;
        max-width: 1037px;
        margin-top: 5rem;
        color: #fff;
        .text-hd{
            font-size: 24px;
            font-weight: 700;
            max-width: 522px;
            width: 100%;
            line-height: 35.30px;
        }
        .text-md{
            font-size: 48px;
            font-weight: 600;
            font-style: normal;
            line-height: 69.69px;
            @media (max-width: 500px) {
            font-size: 36px;
        }
        }
        
        
        .text-sm{
            font-size: 24px;
            font-weight: 400;
            font-style: normal;
            line-height: 35.29px;
            text-align: left; 
            padding: 0 80px;
          
            @media (max-width: 500px) {
            font-size: 18px;
            text-align: left;
            padding: 0 40px;
        }
         }
    }
`