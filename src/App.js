import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PizzaOrder from './PizzaOrder';
import Home from './Home';

const initialFormValues= {
  name: '',
  size: '',
  pepperoni: '',
  mushroom: '',
  sausage: '',
  pineapple: '',
  special: ''
}

const App = () => {
  const[formValues, setFormValues] = useState(initialFormValues);
  const inputChange= (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
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
            <PizzaOrder values={formValues} change={inputChange}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
