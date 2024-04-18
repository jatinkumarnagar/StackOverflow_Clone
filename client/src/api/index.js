import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })


API.interceptors.request.use((req) => {
    // Check if token exists in localStorage and if so, add it to the request headers
    const profile = JSON.parse(localStorage.getItem('Profile'));
    if (profile && profile.token) {
        req.headers.authorization = `Bearer ${profile.token}`;
    }
    return req; // Return the modified request object
}, (error) => {
    // Handle any request error
    return Promise.reject(error);
});

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)
export const voteQuestion = (id, value, userId) => API.patch(`/questions/vote/${id}`, {value, userId})

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId })
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers })

export const fetchAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)