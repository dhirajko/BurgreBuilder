import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./Buildcontrols.css";
const controls = [
  {
    label: "salad",
    type: "salad"
  },
  {
    label: "Bacon",
    type: "bacon"
  },
  {
    label: "Cheese",
    type: "cheese"
  },
  {
    label: "Meat",
    type: "meat"
  }
];
const buildControls = props => (
  <div className="BuildControls">
    <p>
      Current Price: <strong>{props.price}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => {
          props.ingridentAdded(ctrl.type);
        }}
        remove={() => {
          props.ingridentRemove(ctrl.type);
        }}
        diabled={props.disabled[ctrl.type]}
      />
    ))}
    <button onClick={props.ordered} className="OrderButton" disabled={!props.purchable}>
      Order Now
    </button>
  </div>
);
export default buildControls;
