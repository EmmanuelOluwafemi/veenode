import React from 'react'

import styled from 'styled-components'

const Button = ({text, type, onClick}) => {
    return (
        <StyledButton type={type} onClick={onClick}>
            {text}
        </StyledButton>
    )
}

export default Button

const StyledButton = styled.button`
    width: 100%;
    height: 3rem;
    background: #0D0C0C;
    color: #fff;
    border-radius: 100px;
    outline: none;
    border: none;
    cursor: pointer;
`