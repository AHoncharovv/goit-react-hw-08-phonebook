const getContactsList = (state) => state.contacts.contactsList;
const getIsFetchingContacts = (state) => state.contacts.isFetchingContacts; 
const getIsLoading = (state) => state.contacts.isLoading; 

const contactsSelectors = {
    getContactsList,
    getIsFetchingContacts,
    getIsLoading,
}

export default contactsSelectors;