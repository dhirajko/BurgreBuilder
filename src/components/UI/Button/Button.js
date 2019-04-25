import React from "react";
const button = props => (
  <button className={['Button']} onClick={props.clicked}>{props.children}</button>
);
export default button;
