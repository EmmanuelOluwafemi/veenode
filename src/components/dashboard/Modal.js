import React from 'react'

import styled from 'styled-components'

const Modal = ({ children, setClose, title }) => {
    return (
        <StyledModal>
            <div onClick={() => setClose(false)} className="overflow" />
            <div className="content">
                <h3>{title}</h3>
                {children}
            </div>
        </StyledModal>
    )
}

export default Modal

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100vw;
    height: 100%;
    min-height: 100vh;
    background: rgba(255, 255, 255, 0.6);
    z-index: 10;
    overflow-y: auto;

    .overflow {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        width: 100%;
        max-width: 400px;
        padding: 2.5rem;

        h3 {
            font-size: 2rem;
            font-weight: 300;
            color: #000;
        }
    }
`