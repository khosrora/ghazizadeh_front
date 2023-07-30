import React from 'react'
import PublicLayout from '../../../components/layout/public/index'
import BlogIndex from '../../../components/pages/Blogs/SingleBlog/BlogIndex'

function index() {
  return (
    <PublicLayout>
      <BlogIndex />
    </PublicLayout>
  )
}

export default index