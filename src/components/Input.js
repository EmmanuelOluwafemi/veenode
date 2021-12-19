import React from 'react'

import styled from 'styled-components'

const Input = ({ onChange, value, type, required }) => {
    return (
        <StyledInput type={type} required={required} onChange={(e) => onChange(e.target.value)} value={value} />
    )
}

export default Input

const StyledInput = styled.input`
    width: 100%;
    height: 3rem;
    border: 1px solid #AEB3C9;
    background: none;
    border-radius: 100px;
    padding: 0 1rem;
    outline: none;
    font-size: .7865rem;
    font-weight: 300;
`