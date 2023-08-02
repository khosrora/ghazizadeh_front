import React from 'react'
import PublicLayout from '../../../components/layout/public/index'
import BlogIndex from '../../../components/pages/Blogs/SingleBlog/BlogIndex'
import { BASE_API } from '../../../utils/baseApi'

function index(props) {

  const blog = props.data;
  const latestBlog = props.latestBlog;

  return (
    <PublicLayout>
      <BlogIndex blog={blog} latestBlog={latestBlog} />
    </PublicLayout>
  )
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`${BASE_API}/blog/${query.slug}/`)
  const data = await res.json()
  const resLatestBlog = await fetch(`${BASE_API}/blog/latest-blogs-list`)
  const latestBlog = await resLatestBlog.json();
  return {
    props: {
      data,
      latestBlog
    }
  }
}

export default index