import React from 'react'

import styled from 'styled-components'

const BlogButton = ({ outline, text, onClick, width }) => {
    return (
        <StyledBlogButton width={width} outline={outline} onClick={onClick}>
            {text}
        </StyledBlogButton>
    )
}

export default BlogButton

const StyledBlogButton = styled.button`
    width: 100%;
    max-width: ${props => props.width ? "200px" : "108px"};
    height: 3rem;
    border: none;
    outline: none;
    background: ${props => props.outline ? "none" : "#000"};
    color: ${props => props.outline ? "#000" : "#fff"};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background: ${props => props.outline ? "#000" : "#fff"};
        color: ${props => props.outline ? "#fff" : "#000"};
        border: ${props => props.outline ? "none" : "1px solid #000"};
    }
`