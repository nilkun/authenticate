import React, { Component } from 'react';
import { Provider } from "react-redux"
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="onboarding">
            <Navbar />
            <Main />  
          </div>  
        </Router>  
      </Provider>
      
    );
  }
}

export default App;
