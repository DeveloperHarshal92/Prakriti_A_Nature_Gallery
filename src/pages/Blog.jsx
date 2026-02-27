import React from 'react'
import BlogHero from '../components/blog/BlogHero'
import BlogList from '../components/blog/BlogList'

const Blog = () => {
  return (
    <main className="blog-page">
      <BlogHero />
      <BlogList />
    </main>
  )
}

export default Blog