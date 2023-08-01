import React from 'react'

import Content from '../components/content'
import PageHeader from '../components/page-header'
import './home.css'

export default ({ fields }) => {
  const { title, subtitle, featuredImage, body } = fields
  return (
    <main className='Home'>
      <PageHeader
        large
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      <div className='section'>
        <div className='container'>
          <Content source={body} />
        </div>
      </div>
    </main>
  )
}
