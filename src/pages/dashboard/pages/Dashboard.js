import React from 'react'
import DashboardCard from '../../../components/dashboard/DashboardCard'
import { BlogGrid } from './Blog'

const DashboardPage = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <p>Welcome back to Veenode Dashboard, here you will be able to control of the website content.</p>

            <BlogGrid>
                <DashboardCard title="Add Blog Post" link="/user/blogs" />
                <DashboardCard title="Add a team member" link="/user/teams" />
                <DashboardCard title="Add Blog Category" link="/user/category" />
            </BlogGrid>
        </>
        
    )
}

export default DashboardPage
