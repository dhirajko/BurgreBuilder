import React from "react";
import Aux from "../../../hoc/Aux";

const orderSummary = props => {
  const ingridentSummary = Object.keys(props.ingridents).map(igkey => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span>:{" "}
        {props.ingridents[igkey]}
      </li>
    );
  });

  return (
    <Aux>
      
      <h3> Your Order</h3>
      <p>A delicious burger with the followiing ingridents</p>
      <ul>
          {ingridentSummary}
      </ul>
      <p>Continue to checkout</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </Aux>
  );
};
export default orderSummary;
