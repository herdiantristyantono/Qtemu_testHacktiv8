import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Home from './components/layout/Home';
import Login from './components/layout/Login';
import { Provider } from 'react-redux';
import store from './store'

class App extends Component {
  render(){
    return(
      <Router>
      <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
      </div>
      </Router>
      // <Provider store = {store}>
      //   <Home />
      // </Provider>
    );
  }
}

export default App;