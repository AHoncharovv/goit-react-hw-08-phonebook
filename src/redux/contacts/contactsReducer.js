import { createSlice } from "@reduxjs/toolkit";
import contactsOperations from "./contactsOperations";

const initialState = {
    contactsList: null,
    isFetchingContacts: true,
    isLoading: false,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        // [contactsOperations.getContacts.pending](state) {
        //     state.isFetchingContacts = true;
        // },
        [contactsOperations.getContacts.fulfilled](state, action) {
            state.contactsList = action.payload;
            state.isFetchingContacts = false;
        },
        [contactsOperations.addContact.pending](state) {
            state.isLoading = true;
        },
        [contactsOperations.addContact.fulfilled](state, action) {
            state.contactsList = [...state.contactsList, action.payload];
            state.isLoading = false;
        },
        [contactsOperations.deleteContact.pending](state) {
            state.isLoading = true;
        },
        [contactsOperations.deleteContact.fulfilled](state, action) {
            state.contactsList = state.contactsList.filter(contact => (
                contact.id !== action.payload
            ));
            state.isLoading = false;
        },
    },
})

export default contactsSlice.reducer;
