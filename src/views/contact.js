import React from 'react'
import { PiMapPinFill, PiPhoneFill, PiEnvelopeSimpleFill } from 'react-icons/pi'

import PageHeader from '../components/page-header'
import EnquiryFormSimpleAjax from '../components/enquiry-form-simple-ajax'
import Content from '../components/content'
import './contact.css'

export default ({ fields }) => {
  const { body, title, subtitle, featuredImage, address, phone, email } = fields
  return (
    <div className="Contact">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      <div className="section Contact--Section1">
        <div className="container Contact--Section1--Container">
          <div>
            <Content source={body} />

            <div className="Contact--Details">
              {address && (
                <a
                  className="Contact--Details--Item"
                  href={`https://www.google.com.au/maps/search/${encodeURI(
                    address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiMapPinFill /> {address}
                </a>
              )}
              {phone && (
                <a className="Contact--Details--Item" href={`tel:${phone}`}>
                  <PiPhoneFill /> {phone}
                </a>
              )}
              {email && (
                <a className="Contact--Details--Item" href={`mailto:${email}`}>
                  <PiEnvelopeSimpleFill /> {email}
                </a>
              )}
            </div>
          </div>

          <div>
            <EnquiryFormSimpleAjax name="Simple Form Ajax" />
          </div>
        </div>
      </div>
    </div>
  )
}
