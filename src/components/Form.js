import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import FormSignup from "./FormSignup";
import FormSignin from "./FormSignin";

const Form = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <FormSignin />
        </Route>

        <Route path="/signup">
          <FormSignup />
        </Route>
      </Switch>
    </Router>
  );
};

export default Form;
