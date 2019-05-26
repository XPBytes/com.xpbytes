import React, { useMemo } from 'react'
import styled from "@emotion/styled"

const Wrapper = styled('div')`
  background: #252A34;
  color: white;
  width: 100%;
  box-sizing: border-box;
`

const Inner = styled('footer')`
  margin: 0 auto;
  padding: 2rem 20px 32px;
  max-width: 1020px;
  width: 100%;
  box-sizing: border-box;
  border-top: 2px solid transparent;

  body.dark & {
    border-top-color: white;
  }
`

export interface FooterProps {
  chambersOfCommerceNumber: string
  vatIdNumber: string
  address: string
  postal: string
  city: string
}

export function Footer({ chambersOfCommerceNumber, vatIdNumber, address, postal, city }: FooterProps): JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <Wrapper>
      <Inner role="contentinfo">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:
          `{
            "@context" : "http://schema.org",
            "@type" : "LocalBusiness",
            "@id": "https://xpbytes.com/schema/LocalBusiness.jsonld",
            "name" : "XP Bytes",
            "image" : "https://xpbytes.com/images/logo.png",
            "address" : {
              "@type" : "PostalAddress",
              "streetAddress" : "${address}",
              "addressLocality" : "${city}",
              "postalCode" : "${postal}"
            },
            "url": "https://xpbytes.com",
            "logo": "https://xpbytes.com/images/icon.png",
            "priceRange": "$$$"
          }`
        }} />
        <dl>
          <dt>Address</dt>
          <dd>
            <address>
              {address}<br />
              {postal}, {city}
            </address>
          </dd>

          <dt>Chambers of Commerce</dt>
          <dd>{chambersOfCommerceNumber}</dd>

          <dt>VAT identification number</dt>
          <dd>{vatIdNumber}</dd>
        </dl>

        <span>
          XP Bytes operates in collaboration with Delft Solutions and Things Implied.
          © 2012 - {currentYear}
        </span>
      </Inner>
    </Wrapper>
  )
}
