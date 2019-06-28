export const isAuthenticated = () => {
    //localStorage.removeItem('token');
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token') !== null) {
        console.log("entrou navbar auth");
        return true
    }
    return false;
};
