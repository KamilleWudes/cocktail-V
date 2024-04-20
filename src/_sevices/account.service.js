/**Import des modules necessaires */

import Axios from "./caller.service";



let login = (Credential) => {
    return Axios.post('/api/login',Credential)
}

let logout=()=>{
    localStorage.removeItem('token')
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let isLogged = () => {
   let token = localStorage.getItem('token')

   return !!token
}

let getToken = () =>{
    return localStorage.getItem('token')
}

export const accountService = {
    login, logout, saveToken, isLogged , getToken
}