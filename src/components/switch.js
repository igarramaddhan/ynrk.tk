import React from "react";
import PropTypes from 'prop-types';
import "./switch.css";

const Switch = props => {
  return (
    <div className="switch-container" onClick={props.onClick}>
      <div className={`switch-indicator ${props.active ? 'right' : 'left'}`} />
      <div className="left-item">
        <div className="item-content">{props.leftItem}</div>
      </div>
      <div className="right-item">
        <div className="item-content">{props.rightItem}</div>
      </div>
    </div>
  );
};

Switch.propTypes = {
  leftItem: PropTypes.any,
  rightItem: PropTypes.any,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default Switch;
