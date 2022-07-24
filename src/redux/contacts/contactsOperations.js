import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const getContacts = createAsyncThunk('contacts/get', async () => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    }
    catch (error) {
        console.log(error);
    }
});

const addContact = createAsyncThunk('contacts/add', async contact => {
    try {
        const { data } = await axios.post('/contacts', contact);
        return data;
    }
    catch (error) {
        console.log(error);
    }
});

const deleteContact = createAsyncThunk('contacts/delete', async contactId => {
    try {
        await axios.delete(`/contacts/${contactId}`);
        return contactId;
    }
    catch (error) {
        console.log(error);
    }
})

const contactsOperations = {
    getContacts,
    addContact,
    deleteContact,
}

export default contactsOperations;