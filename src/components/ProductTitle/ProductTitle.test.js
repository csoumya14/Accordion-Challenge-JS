import React from 'react';
import { render, fireEvent } from '@testing-library/react';
//import { prettyDOM } from '@testing-library/dom'
import ProductTitle from './ProductTitle';

// ...

test('clicking the button calls event handler once', () => {
  const dataItem = {
    id: 0,
    productTitle: 'Televisions & Home Theatre',
    productList: ['tele-product1', 'tele-product2', 'tele-product3', 'tele-product4'],
    isHidden: true,
    isCollapsed: true,
    isAriaExpanded: false,
    ariaControls: 'sect1',
    ariaLabelledBy: 'accordion1id',
  };

  const mockHandler = jest.fn();

  const component = render(<ProductTitle dataItem={dataItem} handleClick={mockHandler} />);

  const button = component.getByText('Televisions & Home Theatre');
  fireEvent.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
});
