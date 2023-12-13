import { Container } from 'components/App.styled';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

export function Phonebook() {
  return (
    <div>
      <h1>Phonebook</h1>
      <Container>
        <h2>Add new contact</h2>
        <ContactForm />
      </Container>

      <Container>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </div>
  );
}
