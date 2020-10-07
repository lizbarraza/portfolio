import React from "react"
import Img from "gatsby-image"
import { sharpFluidResultToGatsbyImage } from "../../../lib"
import laptopFrameSvg from "../../../images/laptop-frame.svg"

import styles from "./scrollable-image.module.css"

export const ScrollableImage = props => {
  const classNames = [styles.scrollableImage]
  if (props.fullWidth !== undefined) {
    classNames.push(styles.fullWidth)
  }

  return (
    <div className={classNames.join(" ")}>
      <img
        alt=""
        className={styles.scrollableImageFrame}
        src={laptopFrameSvg}
      />
      <div className={styles.scrollableImageInner}>
        <Img fluid={sharpFluidResultToGatsbyImage(props)} />
      </div>
    </div>
  )
}
