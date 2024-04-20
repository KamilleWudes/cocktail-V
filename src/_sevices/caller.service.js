
import  axios from "axios";
import { accountService } from "@/_sevices";
import router from "@/router";

const Axios = axios.create({
    
    baseURL: 'http://127.0.0.1:8000'
})

/**
 * interceptors pour injection token
 */
Axios.interceptors.request.use(request =>{

    //si connecté on ajoute le token dans l'entête
    if(accountService.isLogged){
        request.headers.Authorization = 'Bearer ' + accountService.getToken()
    }

    return request
})
/** 
* interceptors pour injection token
 */
Axios.interceptors.response.use(response =>{
    return response
},error =>{
    console.log(error.response.status)
    if(error.response.status== 401){
        accountService.logout()
        router.push('/login')

    }

})



export default Axios