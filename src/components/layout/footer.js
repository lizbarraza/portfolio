import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteFooterQuery {
      site {
        siteMetadata {
          footerText
          lastUpdate
        }
      }
    }
  `)

  return (
    <footer>
      <p>
        <span className="footer-text">{data.site.siteMetadata.footerText}</span>
        <br />
        <span className="last-update">{data.site.siteMetadata.lastUpdate}</span>
      </p>
    </footer>
  )
}
