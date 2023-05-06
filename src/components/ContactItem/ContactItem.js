import { Button, Item } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <Item>
      <p>
        {name} : {number}
      </p>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
