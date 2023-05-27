import { useDispatch } from 'react-redux';
import { addNewContact } from 'redux/contactsSlice';
import FormMarcup from 'components/FormMarcup/FormMarcup';

const ContactForm = () => {
  const dispatch = useDispatch();

  const submitContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(addNewContact(name, number));
    form.reset();
  };

  return <FormMarcup submitContact={submitContact} />;
};

export default ContactForm;
