import {
  Main,

  PhonebookInput,
  Error,
  Button,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, 'Name must have at least 3 characters')
      .required('Name is required')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name is allowed to include only letters, apostrophes, dashes, and spaces'
      ),
    number: yup
      .string()
      .min(7, 'Phone number should be a minimum of 7 characters')
      .max(17, 'Phone number must not exceed 17 characters in length.')
      .required('Number is required')
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must consist of digits and may include spaces, dashes, parentheses, and can begin with a plus sign (+)'
      ),
  })
  .required();

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ name, number }) => {
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      toast.error(`${name} is already in contacts`, {
        style: {
              color: 'black',
        background: '#fdfbfc',
        },
      });
      reset();
      return;
    }
    toast.success(`${name} is added to contacts`, {
      style: {
        color: 'black',
        background: '#fdfbfc',
      },
    });
    dispatch(addContact({ name, number }));
    reset();
  };

  return (
    <Main onSubmit={handleSubmit(onSubmit)}>
  
      <PhonebookInput
        type="text"
        {...register('name')}
        placeholder="Full name"
      />
      {errors.name && <Error>{errors.name.message}</Error>}
      <PhonebookInput
        type="tel"
        {...register('number')}
        placeholder="Number"
      />
      {errors.number && <Error>{errors.number.message}</Error>}
   <Button type="submit">Add contact</Button>
    </Main>
  );
};
;
