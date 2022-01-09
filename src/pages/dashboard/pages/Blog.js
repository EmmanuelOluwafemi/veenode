import React from 'react'
import styled from 'styled-components'

import Heading from '../../../components/dashboard/Heading'
import BlogCard from '../../../components/dashboard/BlogCard'
import Modal from '../../../components/dashboard/Modal'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Blog = () => {

    const [close, setClose] = React.useState(false)

    return (
        <>
            {close && <Modal title="Add Blog" setClose={setClose}>
                <FormWrapper>
                    <div className="inputGroup">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="description">Content</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data="<p>Enter Blog Content</p>"
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                console.log( { event, editor, data } );
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="tags">Tags</label>
                        <input type="text" id="tags" placeholder='Seperate Each Tags With comma ","'  />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="thumbnail">Thumbnail</label>
                        <input type="file" id="thumbnail" accept='image/*' />
                    </div>

                    <button type="submit">Create Post</button>
                </FormWrapper>
            </Modal>}
            <Heading title="Blog" buttonTitle="Add Blog" onClick={() => setClose(true)} />
            <BlogGrid>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </BlogGrid>
        </>
    )
}

export default Blog

export const BlogGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
    padding-bottom: 2rem;
`

export const FormWrapper = styled.form`
    width: 100%;
    margin-top: 2rem;

    .inputGroup {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;

        label {
            font-size: 1rem;
            font-weight: 300;
            color: #000;
            margin-bottom: 0.5rem;
        }

        input {
            width: 100%;
            height: 2.5rem;
            border: 1px solid #000;
            background: #fff;
            padding: 0 1rem;
            outline: none;
            display: flex;
            align-items: center;
        }
    }

    button {
        width: 100%;
        height: 2.5rem;
        border: none;
        outline: none;
        background: #000;
        color: #fff;
        font-size: 1.25rem;
        font-weight: 300;
        cursor: pointer;

        &:hover {
            background: none;
            border: 1px solid #000;
            color: #000;
        }
    }
`