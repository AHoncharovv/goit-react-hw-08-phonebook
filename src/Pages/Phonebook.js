import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter/Filter";

function Phonebook() {

  return ( 
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  ); 
};

export default Phonebook;