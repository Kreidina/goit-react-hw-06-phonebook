import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem';
import { useMemo } from 'react';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contactsState = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contacts = contactsState.contacts;
  const visibleContact = useMemo(() => {
    const normalizeFilter = filter.toLowerCase();
    const visibleContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return visibleContact;
  }, [contacts, filter]);

  return (
    <ul className={css.contactList}>
      {visibleContact.map(({ name, number, id }) => {
        return <ContactItem name={name} number={number} key={id} id={id} />;
      })}
    </ul>
  );
};

export default ContactList;
