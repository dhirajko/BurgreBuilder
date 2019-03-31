import React from "react";
import BurgerIngrident from './BurgerIngrident/BurgerIngrident'
import './Burger.css'

const burger=(props)=>{
return(
    <div className='Burger'>
        <BurgerIngrident type="bread-top"/>
        <BurgerIngrident type="cheese"/>
        <BurgerIngrident type="meat"/>
        <BurgerIngrident type="bread-bottom"/>
    </div>
    )
}
export default burger;