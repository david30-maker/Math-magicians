import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Root from './components/root';
import Calculator from './components/Calculator';
import Quote from './components/quotes/quotePage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quote />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default App;
