import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import PizzaOrder from './PizzaOrder';
import Home from './Home';
import schema from './FormSchema';

const initialFormValues= {
  name: '',
  size: '',
  pepperoni: '',
  mushroom: '',
  sausage: '',
  pineapple: '',
  special: ''
}

const initialFormErrors = {
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
  const[formErrors, setFormErrors] = useState(initialFormErrors);

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }
  
  const inputChange= (name, value) => {
    validate(name, value);
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
    postNewOrder(newOrder);
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
            errors={formErrors} 
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
