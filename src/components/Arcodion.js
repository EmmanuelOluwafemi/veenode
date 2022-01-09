import React, { useState } from 'react'

import styled from 'styled-components'

const Arcodion = () => {
    const [show, setShow] = useState(false)
    return (
        <StyledAccordion show={show}>
            <div onClick={() => setShow(!show)} className="accordionHeader">
                <div className="accordionTitle">Strategy</div>
                <div className="accordionIcon">Up</div>
            </div>

            <div className="accordionContent">
                <div className='card'>
                    <h5>Title</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris dui lacus, senectus scelerisque massa morbi 
                        condimentum sit diam. Id ultricies duis dolor rutrum senectus. 
                        Eu proin id facilisis dis ut. Netus purus leo elementum 
                        felis ornare risus, dolor, justo, diam. Eu rhoncus 
                        elementum suspendisse pharetra, vel vestibulum. 
                        Adipiscing rhoncus orci potenti gravida dignissim 
                        sit et dolor praesent.
                    </p>
                </div>
                <div className='card'>
                    <h5>Title</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris dui lacus, senectus scelerisque massa morbi 
                        condimentum sit diam. Id ultricies duis dolor rutrum senectus. 
                        Eu proin id facilisis dis ut. Netus purus leo elementum 
                        felis ornare risus, dolor, justo, diam. Eu rhoncus 
                        elementum suspendisse pharetra, vel vestibulum. 
                        Adipiscing rhoncus orci potenti gravida dignissim 
                        sit et dolor praesent.
                    </p>
                </div>
                <div className='card'>
                    <h5>Title</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris dui lacus, senectus scelerisque massa morbi 
                        condimentum sit diam. Id ultricies duis dolor rutrum senectus. 
                        Eu proin id facilisis dis ut. Netus purus leo elementum 
                        felis ornare risus, dolor, justo, diam. Eu rhoncus 
                        elementum suspendisse pharetra, vel vestibulum. 
                        Adipiscing rhoncus orci potenti gravida dignissim 
                        sit et dolor praesent.
                    </p>
                </div>
                <div className='card'>
                    <h5>Title</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris dui lacus, senectus scelerisque massa morbi 
                        condimentum sit diam. Id ultricies duis dolor rutrum senectus. 
                        Eu proin id facilisis dis ut. Netus purus leo elementum 
                        felis ornare risus, dolor, justo, diam. Eu rhoncus 
                        elementum suspendisse pharetra, vel vestibulum. 
                        Adipiscing rhoncus orci potenti gravida dignissim 
                        sit et dolor praesent.
                    </p>
                </div>
                <div className='card'>
                    <h5>Title</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris dui lacus, senectus scelerisque massa morbi 
                        condimentum sit diam. Id ultricies duis dolor rutrum senectus. 
                        Eu proin id facilisis dis ut. Netus purus leo elementum 
                        felis ornare risus, dolor, justo, diam. Eu rhoncus 
                        elementum suspendisse pharetra, vel vestibulum. 
                        Adipiscing rhoncus orci potenti gravida dignissim 
                        sit et dolor praesent.
                    </p>
                </div>
            </div>
        </StyledAccordion>
    )
}

export default Arcodion

const StyledAccordion = styled.section`
    width: 100%;

    .accordionHeader {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
        border-bottom: 1px solid #C4C4C4;
        margin-bottom: 2.5rem;
        cursor: pointer;

        .accordionTitle {
            font-size: 1.5rem;
            font-weight: 500;
        }
    }

    .accordionContent {
        width: 100%;
        overflow: hidden;
        height: ${props => props.show ? 'auto' : '0'};
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2.5rem 1.5rem;

        @media (max-width: 768px) {
            grid-template-columns: 100%;
        }
    }
`