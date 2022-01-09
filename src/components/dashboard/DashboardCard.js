import React from 'react'

import styled from 'styled-components'

import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, link }) => {
    return (
        <StyledDashboardCard to={link}>
            <h2>{title}</h2>

            <div className="iconContainer">
                <IoIosArrowRoundForward className="icon" />
            </div>
        </StyledDashboardCard>
    )
}

export default DashboardCard

const StyledDashboardCard = styled(Link)`
    width: 100%;
    padding: 3rem 1.5rem;
    text-decoration: none;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        font-size: 2rem;
        font-weight: 600;
        color: #00111D;
        max-width: 215px;
        margin-bottom: 3rem;
    }

    .iconContainer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        
        .icon {
            font-size: 3rem;
            color: #00111D;
        }
    }
`