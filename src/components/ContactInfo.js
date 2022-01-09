import React from 'react'

import styled from 'styled-components'

const ContactInfo = () => {
    return (
        <StyledContact>
            <h2>Say hi to Alex, our director of new partnerships</h2>

            <div className='grid'>
                <div className='contact-details'>
                    <div className='details'>
                        <p>New Business</p>
                        <p>hello@veenode.com</p>
                        <p>312 448 7473</p>
                    </div>

                    <div className='details'>
                        <p>Visit Us</p>
                        <p>640 N La Salle Dr. Suite 638</p>
                        <p>Chicago, IL 60654</p>
                    </div>
                </div>

                <form className='contact-form'>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <textarea placeholder='Message'>

                    </textarea>

                    <button type="submit">Send 👋</button>
                </form>
            </div>
        </StyledContact>
    )
}

export default ContactInfo

const StyledContact = styled.section`
    width: 100%;
    max-width: 100vw;
    padding: 6rem 12%;
    background: #00111D;

    @media (max-width: 768px) {
        padding: 3rem 2rem;
        padding-bottom: 6rem;
    }

    h2 {
        font-size: 4.5rem;
        font-weight: 600;
        color: #fff;
        line-height: 1.5;

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        margin-top: 3rem;
        
        @media (max-width: 768px) {
            grid-template-columns: 100%;
        }

        .contact-details {
            width: 100%;

            .details {
                margin-bottom: 2.5rem;

                &:last-child {
                    margin-bottom: 0;
                }

                p {
                    font-size: 1rem;
                    font-weight: 400;
                    margin-bottom: .75rem;
                    color: #fff;
                }
            }
        }

        .contact-form {
            width: 100%;

            input, textarea {
                width: 100%;
                height: 4rem;
                background: none;
                outline: none;
                border: none;
                font-size: 2rem;
                border-bottom: 1px solid #f2f2f2;
                color: #f2f2f2;
                margin-bottom: 1rem;
            }

            textarea {
                height: 10rem;
            }

            button {
                position: relative;
                background: none;
                border: none;
                font-size: 2rem;
                font-weight: 500;
                color: #fff;
                margin-top: 3rem;
                cursor: pointer;

                &:before {
                    content: '';
                    position: absolute;
                    bottom: -20%;
                    width: 1.5rem;
                    height: .3rem;
                    background: #fff;

                    &:hover {
                        width: 4rem;
                    }
                }
            }
        }
    }
`