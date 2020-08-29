import React from "react"
import Img from "gatsby-image"
import { sharpFluidResultToGatsbyImage } from "../../../lib"
import laptopFrameSvg from "../../../images/laptop-frame.svg"

import styles from "./scrollable-image.module.css"

export const ScrollableImage = props => {
  return (
    <div className={styles.scrollableImage}>
      <img
        alt=""
        className={styles.scrollableImageFrame}
        src={laptopFrameSvg}
      />
      <div class={styles.scrollableImageInner}>
        <Img fluid={sharpFluidResultToGatsbyImage(props)} />
      </div>
    </div>
  )
}
