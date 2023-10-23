import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { formatPhoneNumber } from 'utils/formatPhoneNumber';
import { ListItem, ItemName , DeleteButton } from './Contactitem.styled';
import toast from 'react-hot-toast';
import { MdPhone } from 'react-icons/md';
export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ListItem key={contact.id}>
      <ItemName >
        <MdPhone size="20" />
        {contact.name}: {formatPhoneNumber(contact.number)}
      </ItemName>
      <DeleteButton
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact.id));
          toast.success(`${contact.name} is successfully deleted`, {
            style: {
              color: 'black',
        background: '#fdfbfc',
            },
          });
        }}
      >
       Delete
      </DeleteButton>
    </ListItem>
  );
};
