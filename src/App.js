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

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: Boolean(formValues.pepperoni),
      mushroom: Boolean(formValues.mushroom),
      sausage: Boolean(formValues.sausage),
      pineapple: Boolean(formValues.pineapple),
      special: formValues.special
    }
    console.log(newOrder);
    setFormValues(initialFormValues);
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
            <PizzaOrder 
            values={formValues} 
            change={inputChange}
            submit={formSubmit}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
