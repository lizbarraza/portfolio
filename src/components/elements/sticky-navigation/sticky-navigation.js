import React from "react"
import { kebabCase } from "lodash"

import styles from "./sticky-navigation.module.css"

function generateSectionId(name) {
  return `sticky-nav-section-${kebabCase(name)}`
}

export const StickyNavigation = ({ children }) => {
  const links = []

  React.Children.forEach(children, child => {
    if (
      child.type.displayName === "StickyNavigationSection" ||
      child.props.mdxType === "StickyNavigationSection"
    ) {
      links.push(child.props.name)
    }
  })

  return (
    <div>
      <nav className={styles.stickyNav}>
        <ol>
          {links.map((linkName, index) => (
            <li key={linkName}>
              <a href={`#${generateSectionId(linkName)}`}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <span className={styles.stepName}>{linkName}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {children}
    </div>
  )
}

export const StickyNavigationHeader = ({ children }) => {
  return <div className="content-wrapper">{children}</div>
}

export const StickyNavigationSection = ({ children, name }) => {
  return (
    <div
      className={`${styles.stickyNavSection} content-wrapper`}
      id={generateSectionId(name)}
    >
      {children}
    </div>
  )
}
