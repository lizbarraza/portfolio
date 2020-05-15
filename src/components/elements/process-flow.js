import React from "react"
import PropTypes from "prop-types"

const renderItem = (item, index) => (
  <li key={index}>
    <h4 className="process-flow__title">{item.title}</h4>
    <p className="process-flow__description">{item.description}</p>
  </li>
)

export const ProcessFlow = ({ items }) => {
  return <ol className="process-flow">{items.map(renderItem)}</ol>
}

ProcessFlow.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      description: PropTypes.node.isRequired,
    })
  ).isRequired,
}
