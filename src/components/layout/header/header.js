import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"

import styles from "./header.module.css"

export const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{data.site.siteMetadata.title}</h1>

      <nav className={styles.menu}>
        <ul>
          <li>
            <Link to="/case-studies/">Work</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
