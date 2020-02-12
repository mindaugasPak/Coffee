import React from 'react';
import ProductList from './components/ProductList';
import Input from './components/Input';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Input/>
        <ProductList/>
    </div>
  );
}

export default App;
