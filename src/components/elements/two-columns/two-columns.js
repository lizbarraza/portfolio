import React from "react"
import Img from "gatsby-image"
import { sharpFluidResultToGatsbyImage } from "../../../lib"

import styles from "./two-columns.module.css"

export const TwoColumns = ({ children }) => {
  return <div className={styles.twoColumns}>{children}</div>
}

export const TwoColumnsText = ({ children }) => {
  return <div className={styles.twoColumnText}>{children}</div>
}

export const TwoColumnsImage = props => {
  return (
    <div className={styles.twoColumnImage}>
      <Img fluid={sharpFluidResultToGatsbyImage(props)} />
    </div>
  )
}
