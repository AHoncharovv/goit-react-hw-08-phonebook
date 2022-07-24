import { createSlice } from "@reduxjs/toolkit";
import contactsOperations from "./contactsOperations";

const initialState = {
    contactsList: null,
    isLoad: true,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [contactsOperations.getContacts.fulfilled](state, action) {
            state.contactsList = action.payload;
            state.isLoad = false;
        },
        [contactsOperations.addContact.fulfilled](state, action) {
            state.contactsList = [...state.contactsList, action.payload];
            state.isLoad = false;
        },
        [contactsOperations.deleteContact.fulfilled](state, action) {
            state.contactsList = state.contactsList.filter(contact => (
                contact.id !== action.payload
            ));
            state.isLoad = false;
        },
    },
})

export default contactsSlice.reducer;
