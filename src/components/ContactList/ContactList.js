import s from './ContactList.module.css';
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from 'react';
import contactsOperations from 'redux/contacts/contactsOperations';
import contactsSelectors from 'redux/contacts/contactsSelectors';

function ContactList() {
    const dispatch = useDispatch();
    const isLoad = useSelector(contactsSelectors.getIsLoad);
    const contactsList = useSelector(contactsSelectors.getContactsList);

    useEffect(() => {
        dispatch(contactsOperations.getContacts());
    }, [dispatch]);
    
    const filteredValue = useSelector(state => state.filter);

    const handleDeleteUser = event => {
        const deleteUserId = event.currentTarget.value;
        dispatch(contactsOperations.deleteContact(deleteUserId));
        event.currentTarget.disabled = true;
    }

    const normalizedFilter = filteredValue.toLowerCase();
    let visibleContacts = "";
    normalizedFilter ? visibleContacts = contactsList.filter(user => user.name.toLowerCase().includes(normalizedFilter)) : visibleContacts = contactsList;
    
    return (
        <>
            {isLoad ?
                ('Loading...')
                :
                (<ul className={s.list}>
                    {visibleContacts.map((user) => (
                        <li key={user.id} className={s.item}>
                            <span className={s.text}>{user.name} : {user.number}</span>
                            <button type="button" value={user.id} onClick={handleDeleteUser} className={s.btn}>Delete</button>
                        </li>
                    ))}
                </ul >)
            }
        </>
    )
}

export default ContactList;

