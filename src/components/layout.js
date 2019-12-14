/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "../css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"
import "../css/style.css"
import logo from "../images/oneshopper-logo.png"
import SEO from "../components/seo"
import "./layout.css"
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import HeaderLinks from "../components/Header/HeaderLinks.jsx";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
          <Header
              color="transparent"
              routes={[]}
              brand="Sexus"
              rightLinks={<HeaderLinks/>}
              fixed
              changeColorOnScroll={{
                  height: 400,
                  color: "white"
              }}
          />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
