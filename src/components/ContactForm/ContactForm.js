import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addNewContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  const submitContact = e => {
    e.preventDefault();
    const form = e.target;
    const contact = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    dispatch(addNewContact(contact));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={submitContact} autoComplete="off">
      <label htmlFor={inputNameId} className={css.label}>
        Name
      </label>
      <input
        className={css.input}
        type="text"
        name="name"
        id={inputNameId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={inputNumberId} className={css.label}>
        Number
      </label>
      <input
        className={css.input}
        type="tel"
        name="number"
        id={inputNumberId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
