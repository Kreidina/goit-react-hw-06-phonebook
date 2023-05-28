import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/contactsSlice';
import FormMarcup from 'components/FormMarcup/FormMarcup';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const submitContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      return alert(`Name: ${name} to already in contacts`);

    if (
      contacts.some(
        contact => contact.number.toLowerCase() === number.toLowerCase()
      )
    )
      return alert(`Number: ${number} to already in contacts`);
    dispatch(addNewContact(name, number));
    form.reset();
  };

  return <FormMarcup submitContact={submitContact} />;
};

export default ContactForm;
