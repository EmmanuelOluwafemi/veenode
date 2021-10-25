import React from 'react'

import styled from 'styled-components'

// images
import logo1 from "../../assets/images/logo1.png"
import logo2 from "../../assets/images/logo2.png"
import logo3 from "../../assets/images/logo3.png"
import logo4 from "../../assets/images/logo4.png"
import logo5 from "../../assets/images/logo5.png"

const MoreInfo = () => {
    return (
        <StyledMoreInfo>
            <div className="logosContainer">
                <img src={logo1} alt="companies logo" />
                <img src={logo2} alt="companies logo" />
                <img src={logo3} alt="companies logo" />
                <img src={logo4} alt="companies logo" />
                <img src={logo5} alt="companies logo" />
            </div>

            <div className="moreInfoContainer">
                <div className="heading">Our life’s work</div>
                <div className="para">
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
    background: #000C13;
    max-width: 100vw;
    min-height: 750px;
    padding: 5rem 0;

    .logosContainer {
        padding: 0 12%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .moreInfoContainer {
        padding: 0 12%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        margin-top: 5rem;

        .heading {
            font-size: 2.5rem;
            font-weight: 700;
            color: #fff;
        }
        
        .para {
            font-size: 1.5rem;
            font-weight: 400;
            color: #fff;
            line-height: 1.7;
        }
    }
`