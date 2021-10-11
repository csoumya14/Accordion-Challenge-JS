import React, { useState, useEffect } from 'react';
import Home from './containers/Home/Home';
import styled from 'styled-components';
import data from './data/ProductData';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;

const App = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    setProductData(data);
  }, []);

  return (
    <Main>
      <Home productData={productData} setProductData={setProductData} />
    </Main>
  );
};

export default App;
