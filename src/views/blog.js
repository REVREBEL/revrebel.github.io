import React from 'react'
import sortBy from 'lodash.sortby'

import PageHeader from '../components/page-header'
import PostCategoriesNav from '../components/post-categories-nav'
import PostSection from '../components/post-section'

import './blog.css'

export default ({
  fields,
  posts = [],
  postCategories = [],
  showFeatured = true
}) => {
  const { title, subtitle, featuredImage } = fields
  posts = sortBy(posts, ['date']).reverse()

  return (
    <main className='Blog'>
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      {!!postCategories.length && (
        <PostCategoriesNav categories={postCategories} />
      )}

      {!!posts.length && <PostSection posts={posts} />}
    </main>
  )
}
