import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import contactsSelectors from "redux/contacts/contactsSelectors";
import contactsOperations from "redux/contacts/contactsOperations";
import s from './ContactForm.module.css';

function ContactForm() {

    const dispatch = useDispatch();
    const contactsList = useSelector(contactsSelectors.getContactsList);
    const [ name, setName ] = useState('');
    const [ number, setPhone ] = useState('');

    const handleInputChange = e => {
        switch (e.currentTarget.name) {
            case "name": return setName(e.currentTarget.value);
            case "number": return setPhone(e.currentTarget.value);
            default: return "";
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const newUser = { name, number };
        const newUserNormalized = name.toLowerCase();
        const matchedName = contactsList.find(user => user.name.toLowerCase() === newUserNormalized);
        matchedName ? alert(`${name} is already in contacts.`) : dispatch(contactsOperations.addContact(newUser));
        formReset()
    }
         
    const formReset = () => {
        setName("");
        setPhone("");
        return
    }

    return (
        <form onSubmit={handleSubmit} className={s.form}>
                    
            <label className={s.label}>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleInputChange}
                    className={s.input}
                />
            </label>

            <label className={s.label}>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleInputChange}
                    className={s.input}
                />
            </label>

            <button className={s.btn}>Add contact</button>
            {/* {isLoading && <p className={s.text}>We are working on adding a contact</p>} */}
                   
        </form>      
    );   
};

export default ContactForm;