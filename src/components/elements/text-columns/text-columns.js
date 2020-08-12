import React from "react"

import styles from "./text-columns.module.css"

export const TextColumns = ({ children }) => {
  return <div className={styles.textColumns}>{children}</div>
}

export const TextColumn = ({ children }) => {
  return <div className={styles.textColumn}>{children}</div>
}
