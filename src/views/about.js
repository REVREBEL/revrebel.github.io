import React from 'react'

import PageHeader from '../components/page-header'
import LazyImage from '../components/lazy-image'
import Content from '../components/content'
import './about.css'

export default ({ fields }) => {
  const { title, subtitle, featuredImage, section1, section2 } = fields
  return (
    <div className='About'>
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />
      <div className='section'>
        <div className='container'>
          <Content source={section1} />
        </div>
      </div>
      <div className='section'>
        <div className='container'>
          <Content source={section2} />
          <p>The image below is a {'<LazyImage />'}</p>
          <LazyImage src={featuredImage} alt='LazyImage' />
        </div>
      </div>
    </div>
  )
}
