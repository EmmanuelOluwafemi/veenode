import React from 'react'

import styled from 'styled-components'
import SIdebar from './SIdebar'

import { FiLogOut } from 'react-icons/fi';
import { HiMenuAlt4 } from 'react-icons/hi';
import { Outlet } from 'react-router-dom';

const Dashboard = ({ children }) => {

    const [open, setOpen] = React.useState(false);

    return (
        <StyledDashboard>
            <SIdebar open={open} setOpen={setOpen} />

            <div className='wrapper'>
                <div className="wrapper_header">
                    <HiMenuAlt4 onClick={() => setOpen(!open)} className='mobileIcon' />
                    <button className='logout_btn'>
                        <FiLogOut className='icon' />
                        Logout
                    </button>
                </div>
                <div className="wrapper_content">
                    <Outlet />
                </div>
            </div>
        </StyledDashboard>
    )
}

export default Dashboard

const StyledDashboard = styled.div`
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    height: 100vh;
    display: flex;
    background: #F5F0F0;

    .wrapper {
        width: 100%;
        padding-left: 383px;
        height: 100%;

        @media (max-width: 768px) {
            padding-left: 0;
        }

        .wrapper_header {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 1.5rem 0;
            padding-right: 2rem;

            @media (max-width: 768px) {
                justify-content: space-between;
                padding: 1.5rem 1rem;
            }

            .mobileIcon {
                font-size: 1.5rem;
                cursor: pointer;
                display: none;

                @media (max-width: 768px) {
                    display: block;
                }
            }

            .logout_btn {
                display: flex;
                align-items: center;
                font-size: 1rem;
                font-weight: 300;
                color: #000;
                outline: none;
                border: none;
                background: none;
                cursor: pointer;

                .icon {
                    margin-right: 0.5rem;
                    color: #000;
                }
            }
        }
    }

    .wrapper_content {
        padding-right: 5rem;
        margin-top: 3.5rem;

        @media (max-width: 768px) {
            padding-right: 0;
            padding: 0 2rem;
        }
    }
`