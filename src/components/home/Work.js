import React from 'react'
import styled from 'styled-components'

const Work = () => {
    return (
        <StyledWork>
            hello
            <div className="introVideo">play</div>
            <div className="content">
                <h4>Our life’s work</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Purus ut facilisis etiam faucibus. Sem blandit magnis sem 
                    eu arcu pretium gravida vitae fermentum. Sit aliquam id 
                    sapien sit leo vitae, odio. Quis malesuada arcu.
                </p>
            </div>
        </StyledWork>
    )
}

export default Work

const StyledWork = styled.section`
    width: 100%;
    min-height: 400px;
    background: #00111D;
    padding: 0 6%;
    padding-bottom: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 5rem;

    .introVideo {
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

    .content {
        width: 100%;
        max-width: 1037px;
        margin-top: 5rem;
        color: #fff;
        display: flex;
        justify-content: space-between;

        h4 {
            font-size: 3rem;
            font-weight: 600;
            color: #fff;
            max-width: 428px;
            width: 100%;
        }

        p {
            flex-grow: 1;
            font-size: 1rem;
            margin-top: .8rem;
            line-height: 1.7;
        }
    }
`