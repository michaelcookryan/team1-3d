import React from "react";
import { Switch, Route } from 'react-router-dom';
import "./styles/App.css";

class App extends React.Component {

  state = {

  }
  render(){

    return (
      <div className="App">

        <Header/>

        {/* <Switch>
          <Route path="/" exact component={Warehouses} />
          <Route path="/warehouses" component={Warehouses} />
        </Switch> */}

      </div>
    );
  }
  
}

export default App;
