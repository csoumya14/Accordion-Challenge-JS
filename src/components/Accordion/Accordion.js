import React from 'react';
import ProductTitle from '../ProductTitle/ProductTitle';
import ListRegion from '../ListRegion/ListRegion';
import { ItemContainer } from './Accordion.css';

const Accordion = ({ handleClick, productData }) => {
  return (
    <div>
      {productData.map(dataItem => (
        <ItemContainer>
          <ProductTitle dataItem={dataItem} handleClick={handleClick} />
          <ListRegion dataItem={dataItem} />
        </ItemContainer>
      ))}
    </div>
  );
};

export default Accordion;

/*
<span class="Accordion-title" className={`accordion-title ${isOpen ? 'open' : ''}`}>
 <ul className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
 */
