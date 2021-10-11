import { ListItemElement, Link } from './ListItem.css';

const ListItem = ({ listItem }) => {
  return (
    <ListItemElement>
      <Link href="#" className="listItem">
        {listItem}
      </Link>
    </ListItemElement>
  );
};

export default ListItem;
