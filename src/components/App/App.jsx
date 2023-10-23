import { GlobalStyle } from 'GlobalStyles';
import { Container, FirstTitle } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import toast, { Toaster } from 'react-hot-toast';
import { selectError } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong, please try again later');
    }
  }, [error]);

  return (
    <Container>
          <FirstTitle>Phonebook</FirstTitle>
      <ContactForm />
      <ContactList />
      <GlobalStyle />
      <Toaster
        position="top-center"
  reverseOrder={false}
        gutter={4}
        containerStyle={{
          top: 53,
        }}
        toastOptions={{
          duration: 3000,
          style: {
            width: '360px',
            padding: '16px',
             background: '#363636',
      color: '#fff',
          },
        }}
      />
    </Container>
  );
};
