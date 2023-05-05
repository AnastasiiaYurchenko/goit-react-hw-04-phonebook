import { Component } from 'react';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    } else {
      this.setState({ contacts: initialContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const { contacts } = this.state;
    const totalNames = contacts.map(contact => contact.name);

    if (!totalNames.includes(newContact.name)) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    } else {
      window.alert(`${newContact.name} is allready in contacts`);
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactsForm onSave={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={this.getVisibleContacts()}
          onDelete={this.deleteContact}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
