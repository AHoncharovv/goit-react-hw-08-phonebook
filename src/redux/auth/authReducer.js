import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLogged: false,
    isFetchingLoggedUser: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.registration.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
        },
        [authOperations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
        },
        [authOperations.logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLogged = false;
        },
        [authOperations.fetchLoggedUser.pending](state) {
            state.isFetchingLoggedUser = true;
        },
        [authOperations.fetchLoggedUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLogged = true;
            state.isFetchingLoggedUser = false;
        },
        [authOperations.fetchLoggedUser.rejected](state) {
            state.isFetchingLoggedUser = false;
        }
    },
})

export default authSlice.reducer;