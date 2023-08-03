import { nanoid } from 'nanoid';
import { useState ,useEffect } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Container from './Conteiner/Conteiner';

const App = ()=>{
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts"))
  });

const [filter , setFilter ] = useState("");

const formSabmitHendler = ( name, number ) => {
  const contact = {
    id: nanoid(),
    name,
    number,
  };
  if (
    contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )
  ) {
    alert(`${name} is already in contacts.`);
  } else if (contacts.find(contact => contact.number === number)) {
    alert(`${number} is already in contacts.`);
  } else {
    setContacts([contact, ...contacts]);
  }
};

const ChangeFilter = e => {
  setFilter( e.currentTarget.value)
};

const Delite = todoId => {
  setContacts(contacts.filter((i) => i.id !== todoId));
};                

useEffect((prevState)=>{  
    if (prevState !== contacts) {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }
},[contacts])
const NomrmalizeFilter = filter.toLowerCase();
let VilibleTodos = contacts.filter( cont =>
  cont.name.toLowerCase().includes(NomrmalizeFilter)
);
return (
<>
  <Container>
    <h1>Phonebook</h1>
    <ContactForm onSubmit={formSabmitHendler} />
    <h2>Contacts</h2>
    <Filter value={filter} onChange={ChangeFilter} />
    <ContactList contacts={VilibleTodos} OnDelite={Delite} />
  </Container>
</>
);
}
export default App;
