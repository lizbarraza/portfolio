import React from "react"
import PropTypes from "prop-types"

import styles from "./case-study-header.module.css"

export const CaseStudyHeader = (title, subtitle, backgroundColor) => {
  return (
    <header className={styles.caseStudyHeader} style={{ backgroundColor }}>
      <h1 className={styles.caseStudyTitle}>{title}</h1>
      <p className={styles.caseStudySubtitle}>{subtitle}</p>
    </header>
  )
}

CaseStudyHeader.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string.isRequired,
}
