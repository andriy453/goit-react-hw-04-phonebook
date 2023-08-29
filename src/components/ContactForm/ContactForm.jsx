import PropTypes from 'prop-types';
import { useState } from 'react';
import css from  '../../components/ContactForm/ContactForm.module.css';

const  ContactForm  = ({onSubmit}) => {
const [name,  setName] = useState('');
const [number,  setNumber] = useState('');

 const hendelChange = (event) => {
  const { name, value } = event.currentTarget;
 if( name === 'number' ){
  setNumber(value);
 }
 if( name === 'name' ){
  setName(value);
 }
};

 const hendleSabmit = event => {
  event.preventDefault();
  onSubmit(name,number);
  reset();
};

 const reset = () => {
  setName('');
  setNumber('');
};

return (
  <div>
    <form onSubmit={hendleSabmit}>
      <label className={css.lable}>
        Name
        <input
          className={css.contact_inp}
          onChange={hendelChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.lable}>
        Number
        <input
          className={css.contact_inp}
          onChange={hendelChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.sabmit_contact} type="sabmit">
        add contact
      </button>
    </form>
  </div>
);
 }
export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
