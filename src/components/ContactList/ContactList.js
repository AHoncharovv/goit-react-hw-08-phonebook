import s from './ContactList.module.css';
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import contactsOperations from 'redux/contacts/contactsOperations';
import contactsSelectors from 'redux/contacts/contactsSelectors';
import BorderExample from 'components/Spinner/Spinner';

function ContactList() {
    const dispatch = useDispatch();
    const isFetchingContacts = useSelector(contactsSelectors.getIsFetchingContacts);
    const isLoading = useSelector(contactsSelectors.getIsLoading);
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
    let visibleContacts = null;
    normalizedFilter ? visibleContacts = contactsList.filter(user => user.name.toLowerCase().includes(normalizedFilter)) : visibleContacts = contactsList;
    
    return (
        <>
            {isFetchingContacts ?
                ('Loading...')
                :
                (<>
                    <ul className={s.list}>
                        {visibleContacts.map((user) => (
                            <li key={user.id} className={s.item}>
                                <span className={s.text}>{user.name} : {user.number}</span>
                                <Button variant="primary" type="button" value={user.id} onClick={handleDeleteUser} >
                                    Delete
                                </Button>
                            </li>
                        ))}
                    </ul >
                    {isLoading&&<BorderExample />}
                </>)
            }
        </>
    )
}

export default ContactList;

