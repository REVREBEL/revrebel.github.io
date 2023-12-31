import React from 'react'
import { Link } from 'react-router-dom'
import { PiArrowFatRightFill } from 'react-icons/pi'

import Content from '../components/content'
import BackgroundImage from '../components/back-ground-image'
import { dateFormatted } from '../util/date'
import './single-post.css'

export default ({ fields, nextPostURL, prevPostURL }) => {
  const { title, date, postFeaturedImage, body, categories = [] } = fields
  return (
    <article className="SinglePost section light">
      {postFeaturedImage && (
        <BackgroundImage
          className="SinglePost--BackgroundImage"
          src={postFeaturedImage}
          alt={title}
        />
      )}

      <div className="container skinny">
        <Link className="SinglePost--BackButton" to="/blog/">
          <ChevronLeft /> BACK
        </Link>
        <div className="SinglePost--Content relative">
          <div className="SinglePost--Meta">
            {!!categories.length &&
              categories.map(obj => (
                <span key={obj.category} className="SinglePost--Meta--Category">
                  {obj.category}
                </span>
              ))}
            {date && (
              <span className="SinglePost--Meta--Date">
                {dateFormatted(date)}
              </span>
            )}
          </div>

          {title && <h1 className="SinglePost--Title">{title}</h1>}

          <div className="SinglePost--InnerContent">
            <Content source={body} />
          </div>

          <div className="SinglePost--Pagination">
            {prevPostURL && (
              <Link
                className="SinglePost--Pagination--Link prev"
                to={prevPostURL}
              >
                Previous Post
              </Link>
            )}
            {nextPostURL && (
              <Link
                className="SinglePost--Pagination--Link next"
                to={nextPostURL}
              >
                Next Post
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
