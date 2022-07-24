const getContactsList = (state) => state.contacts.contactsList;
const getIsLoad = (state) => state.contacts.isLoad; 

const contactsSelectors = {
    getContactsList,
    getIsLoad,
}

export default contactsSelectors;