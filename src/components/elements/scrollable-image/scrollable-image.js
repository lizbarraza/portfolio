import React from "react"
import Img from "gatsby-image"
import { sharpFluidResultToGatsbyImage } from "../../../lib"

import styles from "./scrollable-image.module.css"

export const ScrollableImage = props => {
  return (
    <div className={styles.scrollableImage}>
      <Img fluid={sharpFluidResultToGatsbyImage(props)} />
    </div>
  )
}
