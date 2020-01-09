import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <div><p>This is burger Builder</p></div>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
