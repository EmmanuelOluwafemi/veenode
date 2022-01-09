import React from 'react'
import axios from 'axios'

import Heading from '../../../components/dashboard/Heading'

import styled from 'styled-components'
import Modal from '../../../components/dashboard/Modal'
import { FormWrapper } from './Blog'

const SingleCategory = () => {
    return (
        <StyledCategory>
            <p>Emmanuel Yusuf</p>
        </StyledCategory>
    )
}

const Category = () => {

    const [close, setClose] = React.useState(false)
    const [title, setTitle] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        const token = localStorage.getItem("token")

        axios.post("http://veenode-staging.herokuapp.com/blog/create_article_category",
        { name_of_category: title },
        {headers: {
            Authorization: `Bearer ${token}`
        }}
        ).then((res) => {
            console.log(res)
            setLoading(false)
        }).catch((err) => {
            console.log(err.response)
            setLoading(false)
        })
    }

    return (
        <>
            {
                close &&
                <Modal title="Add Category" setClose={setClose}>
                    <FormWrapper onSubmit={handleSubmit}>
                        <div className="inputGroup">
                            <label htmlFor="title">Title</label>
                            <input onChange={(e) => setTitle(e.target.value)} type="text" id="title" />
                        </div>
                        <button type="submit">Create Category</button>
                    </FormWrapper>
                </Modal>
            }
          <Heading title="Blog Category" onClick={() => setClose(!close)} buttonTitle={loading ? "Loading..." : "Add Blog Category"} width />  
          <CategoryGrid>
                <SingleCategory />
                <SingleCategory />
                <SingleCategory />
                <SingleCategory />
                <SingleCategory />
          </CategoryGrid>
        </>
    )
}

export default Category

const StyledCategory = styled.div`
    background: #fff;
    padding: .75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 250px;

    p {
        font-size: 1.5rem;
        font-weight: 500;
        color: #000;
    }
`

const CategoryGrid = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 1rem;
    margin-top: 3rem;
`