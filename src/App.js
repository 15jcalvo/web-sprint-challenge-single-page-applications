import React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function Home(props) {
  return <h1>Home</h1>
}

function Pizza(props) {
  return <h1>Order Form</h1>
}

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <BrowserRouter>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link id='order-pizza' to='/pizza'>Order Pizza</Link>
        </div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/pizza'>
            <Pizza />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
