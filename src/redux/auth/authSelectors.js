const getUserName = (state) => state.auth.user.name;
const getUserEmail = (state) => state.auth.user.email;
const getIsLogged = (state) => state.auth.isLogged;
const getToken = (state) => state.auth.token;
const getFetchingLoggedUser = (state) => state.auth.isFetchingLoggedUser;

const authSelectors = {
    getUserName,
    getUserEmail,
    getIsLogged,
    getToken,
    getFetchingLoggedUser
}

export default authSelectors;