export const getUserName = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    return user.name;
}