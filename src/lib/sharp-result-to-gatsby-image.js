import lodash from "lodash"

const FLUID_FIELDS = [
  "aspectRatio",
  "src",
  "srcSet",
  "sizes",
  "base64",
  "tracedSVG",
  "srcWebp",
  "srcSetWebp",
  "media",
  "maxWidth",
  "maxHeight",
]

/* Converts the result of a directly called sharp.fluid to the parameters required
 * by the gatsby-image Img component.
 * Used in conjunction with the plugin gatsby-remark-custom-image-component
 */
export function sharpFluidResultToGatsbyImage(sharpFluidResult) {
  const converted = lodash.pick(sharpFluidResult, FLUID_FIELDS)
  if (converted.aspectRatio) {
    converted.aspectRatio = parseFloat(converted.aspectRatio)
  }
  return converted
}
