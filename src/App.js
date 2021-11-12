import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

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
      </BrowserRouter>
    </>
  );
};
export default App;
