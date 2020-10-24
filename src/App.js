import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Veiculos from './containers/veiculos';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Veiculos}></Route>
          <Veiculos />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
