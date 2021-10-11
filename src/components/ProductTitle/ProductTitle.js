import downArrow from '../../assets/chevron-down.svg';
import upArrow from '../../assets/chevron-up.svg';
import { Button, TitleContainer } from './ProductTitle.css';

const ProductTitle = ({ handleClick, dataItem }) => {
  return (
    <TitleContainer>
      <Button
        aria-expanded={dataItem.isAriaExpanded}
        aria-controls={dataItem.ariaControls}
        id={dataItem.ariaLabelledBy}
        onClick={() => handleClick(dataItem.id)}
      >
        {dataItem.productTitle}
        <span>
          {dataItem.isHidden ? <img src={downArrow} alt="" /> : <img src={upArrow} alt="" />}
        </span>
      </Button>
    </TitleContainer>
  );
};

export default ProductTitle;
