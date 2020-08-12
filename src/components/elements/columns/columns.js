import React from "react"

import styles from "./columns.module.css"

export const Columns = ({ children }) => {
  return <div className={styles.columns}>{children}</div>
}

export const Column = ({ children }) => {
  return <div className={styles.column}>{children}</div>
}
