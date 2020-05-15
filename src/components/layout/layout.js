/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import * as customComponents from "../elements"

import { Header } from "./header"
import { Footer } from "./footer"

export const Layout = ({ children }) => {
  return (
    <MDXProvider components={customComponents}>
      <Header />

      <main>{children}</main>

      <Footer />
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
