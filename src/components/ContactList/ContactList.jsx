import { Title, NoContacts } from './ContactList.styled';
import { Filter } from 'components/ContactFilter/ContactFilter';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectFilter, selectLoading } from 'redux/selectors';
import { Comment } from 'react-loader-spinner';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {contacts.length === 0 && isLoading && (
      <Comment
  visible={true}
  height="80"
  width="80"
  ariaLabel="comment-loading"
  wrapperStyle={{}}
  wrapperClass="comment-wrapper"
  color="#fff"
  backgroundColor="#ff90e8"
/>
      )}
      {contacts.length > 0 ? (
        <>
          <Title>Contacts</Title>
          <Filter />
          <ul>
            {getVisibleContacts().map(contact => {
              return <ContactItem key={contact.id} contact={contact} />;
            })}
          </ul>
        </>
      ) : (
        !isLoading && <NoContacts>There are no contacts in your phonebook</NoContacts>
      )}
    </>
  );
};
