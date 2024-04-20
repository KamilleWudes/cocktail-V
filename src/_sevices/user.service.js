/**Import des modules necessaires */

import Axios from "./caller.service";


let getAllUsers = () => {
    return Axios.get('/api/users')
}

let getUser = (uid) => {
    return Axios.get('/api/userEdit/'+uid)
}

let updateUser = (user) => {
    return Axios.put('/api/userUpdate/'+user.id , user)
}

let createUser = (user) => {
    return Axios.post('/api/register/', user)
}

let deleteUser = (uid ) => {
    return Axios.delete('/api/deleteUser/'+uid)
}

export const userService = {
    getAllUsers, getUser, updateUser, createUser, deleteUser
}