# PrivateRoute-code
PrivateRoute code with localStorage
import React from "react";
import { Route, Redirect } from "react-router-dom";

//privet route requirements:
//1. it has the same API (interface) as <Route/>
//2. it renders a <Route /> and passes all props through to it
//3.it checks if the user is authenticated. if they are it renders the "component" prop, else it redirects to the login route

const PrivateRoute = ({ component: Component, ...rest }) => {
    //somehow we need to pull the component from props and also pass the remaining props through to <Route/>
  //if token is in loaclstorage render the component
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          //else redirect to login
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
export default PrivateRoute;
