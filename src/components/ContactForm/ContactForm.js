import { useState, useEffect } from "react";
import s from './ContactForm.module.css';
import { useAddContactMutation } from '../../redux/contactsSlice';
import { useGetContactsQuery } from '../../redux/contactsSlice';

function ContactForm() {

    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ addContact, { isLoading, isSuccess } ] = useAddContactMutation();
    const { data } = useGetContactsQuery();

    useEffect(() => {
        isSuccess && formReset();
    }, [isSuccess]);

    const handleInputChange = e => {
        switch (e.currentTarget.name) {
            case "name": return setName(e.currentTarget.value);
            case "phone": return setPhone(e.currentTarget.value);
            default: return "";
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const newUser = { name, phone };
        const newUserNormalized = name.toLowerCase();
        const matchedName = data.find(user => user.name.toLowerCase() === newUserNormalized);
        matchedName ? alert(`${name} is already in contacts.`) : addContact(newUser);
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
                    name="phone"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={phone}
                    onChange={handleInputChange}
                    className={s.input}
                />
            </label>

            <button className={s.btn}>Add contact</button>
            {isLoading && <p className={s.text}>We are working on adding a contact</p>}
                   
        </form>      
    );   
};

export default ContactForm;