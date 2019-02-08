import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import ThemeContext from "../contexts/ThemeContext";

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
      <ThemeContext.Consumer>
        {theme => (
          <div className={theme.dark ? "dark" : "light"}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0
              }}
            >
              <main>{children}</main>
              <footer>
                <a href="https://twitter.com/igarramaddhan" target="__blank">twitter</a>•
                <a href="https://github.com/igarramaddhan" target="__blank">github</a>
              </footer>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
