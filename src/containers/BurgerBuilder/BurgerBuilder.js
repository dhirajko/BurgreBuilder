import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Aux from "../../hoc/Aux";

const INGRIDENTS_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingridents: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      purchable: false,
      purchasing: false
    };
  }

  updatePurchaseState = ingridents => {
    const sum = Object.keys(ingridents)
      .map(igKey => {
        return ingridents[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      });
    this.setState({ purchable: sum > 0 });
  };
  addIngridentsHandler = type => {
    const oldCount = this.state.ingridents[type];
    const updatedCount = oldCount + 1;
    const updatedIngridents = {
      ...this.state.ingridents
    };
    updatedIngridents[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const priceAddition = INGRIDENTS_PRICE[type];
    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingridents: updatedIngridents });
    this.updatePurchaseState(updatedIngridents);
  };

  removeIngridentsHandler = type => {
    const oldCount = this.state.ingridents[type];
    const updatedCount = oldCount - 1;
    const updatedIngridents = {
      ...this.state.ingridents
    };
    if (updatedCount > -1) {
      updatedIngridents[type] = updatedCount;
    }
    const oldPrice = this.state.totalPrice;
    const priceAddition = INGRIDENTS_PRICE[type];
    const newPrice = oldPrice - priceAddition;

    this.setState({ totalPrice: newPrice, ingridents: updatedIngridents });
    this.updatePurchaseState(updatedIngridents);
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  render() {
    const disableInfo = {
      ...this.state.ingridents
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingridents={this.state.ingridents}
            
          />
        </Modal>
        <Burger ingridents={this.state.ingridents} />
        <BuildControls
          ingridentRemove={this.removeIngridentsHandler}
          ingridentAdded={this.addIngridentsHandler}
          disabled={disableInfo}
          price={this.state.totalPrice.toFixed(2)}
          purchable={this.state.purchable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
