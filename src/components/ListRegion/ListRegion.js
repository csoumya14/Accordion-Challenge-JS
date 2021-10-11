import List from '../List/List';
import { ListRegionContainer } from './ListRegion.css';

const ListRegion = ({ dataItem }) => {
  return (
    <ListRegionContainer
      id={dataItem.ariaControls}
      aria-labelledby={dataItem.ariaLabelledBy}
      role="region"
    >
      {!dataItem.isHidden ? <List data={dataItem.productList} /> : ''}
    </ListRegionContainer>
  );
};

export default ListRegion;
