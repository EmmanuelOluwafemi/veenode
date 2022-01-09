import React from 'react'

import { FiGrid, FiSlack, FiUsers } from 'react-icons/fi'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { BiCategoryAlt } from 'react-icons/bi'

import { Link, NavLink } from 'react-router-dom'

import styled from 'styled-components'

import logo from '../../assets/images/logo.svg'

const SIdebar = ({open, setOpen}) => {
    return (
        <StyledSidebar open={open}>
            <Link className='linkedImg' to="/">
                <img src={logo} alt="logo" />
            </Link>

            <div className="main">
                <NavLink onClick={
                () => {
                    setOpen(!open)
                }
            } to="/user">
                    <FiGrid className='icon' />
                    Dashboard
                </NavLink>
                <NavLink onClick={
                () => {
                    setOpen(!open)
                }
            } to="/user/blogs">
                    <FiSlack className='icon' />
                    Blog
                </NavLink>
                <NavLink onClick={
                () => {
                    setOpen(!open)
                }
            } to="/user/teams">
                    <FiUsers className='icon' />
                    Teams
                </NavLink>
                <NavLink onClick={
                () => {
                    setOpen(!open)
                }
            } to="/user/category">
                    <BiCategoryAlt className='icon' />
                    Blog Category
                </NavLink>
            </div>

            <IoCloseCircleOutline onClick={
                () => {
                    setOpen(!open)
                }
            } className="closeModal" />
        </StyledSidebar>
    )
}

export default SIdebar

const StyledSidebar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 335px;
    height: 100%;
    background: #fff;
    padding: 0 3rem;
    z-index: 3;

    @media (max-width: 768px) {
        max-width: 100vw;
        display: ${(props) => props.open ? "block" : "none"};
    }


    .closeModal {
        position: absolute;
        top: 2rem;
        right: 2rem;
        font-size: 2.5rem;
        color: red;
        cursor: pointer;
        display: none;

        @media (max-width: 768px) {
            display: block;
        }
    }

    .linkedImg {
        background: #000;
        width: 130px;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .main {
        display: flex;
        flex-direction: column;
        margin-top: 6rem;

        a {
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            margin-bottom: 2.5rem;
            text-decoration: none;
            color: #000;

            .icon {
                margin-right: 0.5rem;
            }

            &:hover {
                opacity: 0.7;
            }
        }
    }
`