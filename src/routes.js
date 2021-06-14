import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './App';
import Pokemon from './pokemon';

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/pokemon/:id" component={Pokemon} />
    </Router>
  );
}