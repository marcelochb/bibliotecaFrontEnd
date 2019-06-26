export const isAuthenticated = () => {
    //localStorage.removeItem('token');
    if (localStorage.getItem('token') !== null) {
        return true
    }
    return false;
};