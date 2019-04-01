import React from "react";
import "./BuildControl.css";
const buildControl = props => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button className="Less" onClick={props.remove} disabled={props.diabled}>
      Less
    </button>
    <button className="More" onClick={props.added}>
      More
    </button>
  </div>
);
export default buildControl;
