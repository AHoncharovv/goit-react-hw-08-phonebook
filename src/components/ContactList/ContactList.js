import s from './ContactList.module.css';
import { useSelector } from "react-redux/es/exports";
import { useGetContactsQuery } from '../../redux/contactsSlice';
import { useDeleteContactMutation } from '../../redux/contactsSlice';

function ContactList() {
    
    const { data, isLoading } = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();
    
    const filteredValue = useSelector(state => state.filter);

    const handleDeleteUser = event => {
        const deleteUserId = event.currentTarget.value;
        deleteContact(deleteUserId);
        event.currentTarget.disabled = true;
    }

    const normalizedFilter = filteredValue.toLowerCase();
    let visibleContacts = "";
    normalizedFilter ? visibleContacts = data.filter(user => user.name.toLowerCase().includes(normalizedFilter)) : visibleContacts = data;

    return (
        <>
            {isLoading ?
                ('Loading...')
                :
                (<ul className={s.list}>
                    {visibleContacts.map((user) => (
                        <li key={user.id} className={s.item}>
                            <span className={s.text}>{user.name} : {user.phone}</span>
                            <button type="button" value={user.id} onClick={handleDeleteUser} className={s.btn}>Delete</button>
                        </li>
                    ))}
                </ul >)
            }
        </>
    )
}

export default ContactList;