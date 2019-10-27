import React from 'react';
import TopAppBar from './TopAppBar/TopAppBar';
import ProductList from './ProductList/ProductList';

const App: React.FC = () => {
  return(
    <React.Fragment>
      <TopAppBar />
      <ProductList />
    </React.Fragment>
  );
}

export default App;
