import React from "react";
import BurgerIngrident from "./BurgerIngrident/BurgerIngrident";
import "./Burger.css";

const burger = props => {
  console.log(props.ingridents);
  let transfomedIngredient = Object.keys(props.ingridents).map(igkey => {
    return [...Array(props.ingridents[igkey])].map((_, i) => {
      return <BurgerIngrident key={igkey + i} type={igkey} />;
    });
  }).reduce((arr,el)=>{
      return arr.concat(el)
  },[])
 
  if(transfomedIngredient.length===0){
    transfomedIngredient=<p>Please start adding ingridents</p>
  }

  return (
    <div className="Burger">
      <BurgerIngrident type="bread-top" />
      {transfomedIngredient}
      <BurgerIngrident type="bread-bottom" />
    </div>
  );
};
export default burger;
