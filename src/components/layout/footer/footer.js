import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./footer.module.css"

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
    <footer className={styles.footer}>
      <p>{data.site.siteMetadata.footerText}</p>
    </footer>
  )
}
