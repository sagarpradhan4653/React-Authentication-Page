import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Auth from './Component/Auth';
import Dashboard from './Component/Dashboard';
import Logout from './Component/Reducer/Logout';
import Header from './Header';





function App(props) {

  useEffect(() => {
    props.autoStart()
  }, [])
console.log(props.state);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Auth" component={Auth} />
          <Route path="/Logout" component={Logout} />
        </Switch>
      </BrowserRouter>
      App
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    autoStart: () => dispatch({ type: 'AUTH_START' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
