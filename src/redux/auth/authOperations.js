import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

const registration = createAsyncThunk('auth/register', async registerData => {
    try {
        const { data } = await axios.post('/users/signup', registerData);
        token.set(data.token);
        return data;
    }
    catch (error) {
        console.log(error);
    }
});

const logIn = createAsyncThunk('auth/login', async loginData => {
    try {
        const { data } = await axios.post('/users/login', loginData);
        token.set(data.token);
        return data;
    }
    catch (error) {
        console.log(error);
    }
});

const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        const { data } = await axios.post('/users/logout');
        token.unset();
        return data;
    }
    catch (error) {
        console.log(error);
    }
});

const fetchLoggedUser = createAsyncThunk('auth/refresh', async (_,thunkAPI) => {
    
    const state = thunkAPI.getState();
    const refreshToken = state.auth.token;
    if (refreshToken === null) { return state};
    token.set(refreshToken);
    try {
        const { data } = await axios.get('/users/current');
        
        return data;
    }
    catch (error) {
        console.log(error);
    }
})

const authOperations = {
    registration,
    logIn,
    logOut,
    fetchLoggedUser,
};

export default authOperations;