import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://chatroom-back.herokuapp.com/",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
    });
};