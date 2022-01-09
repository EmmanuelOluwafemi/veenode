import React from 'react'

import styled from 'styled-components'
import BlogButton from './BlogButton'

const Heading = ({title, buttonTitle, onClick, width}) => {
    return (
        <StyledHeading>
            <h3>{title}</h3>
            <BlogButton width={width} text={buttonTitle} onClick={onClick} />
        </StyledHeading>
    )
}

export default Heading

const StyledHeading = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-size: 2.5rem;
        font-weight: 300;
        color: #000;
    }
`