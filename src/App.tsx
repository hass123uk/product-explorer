import React from 'react';
import TopAppBar from './components/TopAppBar/TopAppBar';
import ProductList from './components/ProductList/ProductList';


const App: React.FC = () => {
  return(
    <React.Fragment>
      <TopAppBar />
      <ProductList />
    </React.Fragment>
  );
}

export default App;
