export const GET_USER = '@@user/GET_USER';
export const getUser = (user) => ({
    type: GET_USER,
    user,
});