import React from 'react'

import styled from 'styled-components'
import Input from './Input'

const FormGroup = ({ label, value, onChange, type, required }) => {
    return (
        <StyledFormGroup>
            <label>{label}</label>

            <Input required={required} value={value} onChange={onChange} type={type} />
        </StyledFormGroup>
    )
}

export default FormGroup

const StyledFormGroup = styled.div`
    width: 100%;
    margin-bottom: 1.25rem;

    label {
        font-size: .7865rem;
        font-weight: 300;
        color: #252424;
        letter-spacing: .03em;
        margin-bottom: .5rem;
        display: block;
    }
`