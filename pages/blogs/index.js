import React from 'react'
import PublicLayout from '../../components/layout/public/index'
import BlogsIndex from '../../components/pages/Blogs/BlogsIndex'

function index() {
    return (
        <PublicLayout>
            <BlogsIndex />
        </PublicLayout>
    )
}

export default index