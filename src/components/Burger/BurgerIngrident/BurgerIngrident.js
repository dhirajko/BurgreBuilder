import React from 'react' 
import "./BurgerIngridents.css";
import Proptypes from 'prop-types';

const burgerIngrident = props => {
  let ingrident = null;

  switch (props.type) {
    case ("bread-bottom"):
      ingrident = <div className="BreadBottom" />;
      break;
    case ("bread-top"):
      ingrident = (
        <div className="BreadTop">
          <div className="Seeds1" />
          <div className="Seeds2" />
        </div>
      );
      break;
    case ("meat"):
      ingrident = <div className="Meat" />;
      break;
    case ("cheese"):
      ingrident = <div className="Cheese" />;
      break;
    case ("salad"):
      ingrident = <div className="Salad" />;
      break;
    case ("bacon"):
      ingrident = <div className="Bacon" />;
      break;
    default:
    ingrident=null;
  }
  return ingrident
  }

  burgerIngrident.propTypes={
      type: Proptypes.string.isRequired
  }

export default burgerIngrident;
