import React from 'react';
import Heading from '../../components/HeadingText/HeadingText';
import Accordion from '../../components/Accordion/Accordion';
import { Wrapper } from './Home.css';

const MainPage = ({ productData, setProductData }) => {
  const handleClick = value => {
    const dataToChange = productData.find(i => i.id === value);
    const changedData = {
      ...dataToChange,
      isAriaExpanded: !dataToChange.isAriaExpanded,
      isHidden: !dataToChange.isHidden,
    };
    setProductData(productData.map(data => (data.id !== value ? data : changedData)));
  };

  return (
    <Wrapper>
      <Heading title="Electronics" />
      <Accordion productData={productData} handleClick={handleClick} />
    </Wrapper>
  );
};

export default MainPage;

/*
const handleClick = value => {
    const dataToChange = productData.find(i => i.id === value )
    const itemIndex = productData.findIndex(i => i.id === value);
    const productDataItem = { ...productData[itemIndex] };
    const productDataCopy = [...productData];
    toggleValues(itemIndex, productDataItem);
    productDataCopy[itemIndex] = productDataItem;
    setProductData(productDataCopy);
  };
*/
