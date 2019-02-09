import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Switch from "./switch";
import ThemeContext from "../contexts/ThemeContext";

const Header = ({ siteTitle }) => (
  <ThemeContext.Consumer>
    {theme => (
      <header
        style={{
          // background: `rebeccapurple`,
          marginBottom: `1.45rem`
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
            paddingBottom: 8,
            borderBottom: "solid 2px #ff9900",
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'center'
          }}
        >
          <h1
            style={{
              margin: 0,
              textShadow: `3px 3px ${theme.dark ? "white" : "#ff9900"}`
            }}
          >
            <Link
              to="/"
              style={{
                color: theme.dark ? `#ff9900` : `white`,
                textDecoration: `none`
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          {/* <button className="dark-switcher" onClick={theme.toggleDark}>
            {theme.dark ? (
              <span className="light-switch">Light mode ☀</span>
            ) : (
              <span className="dark-switch">Dark mode ☾</span>
            )}
          </button> */}
          <Switch
            active={theme.dark}
            onClick={theme.toggleDark}
            rightItem={<span className="light-switch">☀</span>}
            leftItem={<span className="dark-switch">☾</span>}
          />
        </div>
      </header>
    )}
  </ThemeContext.Consumer>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
