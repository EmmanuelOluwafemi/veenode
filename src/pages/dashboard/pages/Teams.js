import React from 'react'
import Heading from '../../../components/dashboard/Heading'
import Modal from '../../../components/dashboard/Modal'
import TeamCard from '../../../components/dashboard/TeamCard'
import { BlogGrid, FormWrapper } from './Blog'

const Teams = () => {

    const [modal, setModal] = React.useState(false)

    return (
        <>
            {
                modal &&
                <Modal title="Add Team Member" setClose={setModal}>
                    <FormWrapper>
                        <div className="inputGroup">
                            <label htmlFor="image">Image</label>
                            <input type="file" id="image" />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="role">Role</label>
                            <input type="text" id="role" />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="instagram_handle">Instagram Handle</label>
                            <input type="text" id="instagram_handle" />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="twitter_handle">Twitter Handle</label>
                            <input type="text" id="twitter_handle" />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="linkedin handle">Linkedin Handle</label>
                            <input type="text" id="linkedin handle" />
                        </div>

                        <button type="submit">Create Team Member</button>
                    </FormWrapper>
                </Modal>
            }

            <Heading title="Teams" 
                buttonTitle="Add Team Member" 
                width 
                onClick={() => setModal(!modal)}    
            />
            <BlogGrid>
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </BlogGrid>
        </>
    )
}

export default Teams
