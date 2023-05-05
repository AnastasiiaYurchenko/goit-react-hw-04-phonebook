import { Component } from 'react';
import { Button, Item } from './ContactItem.styled';
import PropTypes from 'prop-types';

export class ContactItem extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  render() {
    const {
      contact: { id, name, number },
      onDelete,
    } = this.props;
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
  }
}
