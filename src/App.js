import React from 'react';
import Main from './Component/main/Main'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Careers from './Component/careers/Careers';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  return (
    <>
    <Main/>
    {/* <Router>
      <Switch>
        <Route path="/careers" exact component={Careers}/>
      </Switch>

    </Router> */}
    </>
  );
}

export default App;
