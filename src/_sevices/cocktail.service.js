/**Import des modules necessaires */

import Axios from "./caller.service";


let getAllCocktails = () => {
    return Axios.get('/api/cocktails')
}

let getCocktail = (cid) => {
    return Axios.get('/api/cocktailEdit/'+cid)
}

let updateCocktail = (cocktail) => {
    return Axios.put('/api/cocktailUpdate/'+cocktail.id , cocktail)
}

let createCocktail = (cocktail) => {
    return Axios.post('/api/createCocktail/', cocktail)
}

let deleteCocktail = (cid ) => {
    return Axios.delete('/api/deleteCocktail/'+cid)
}



export const CocktailService = {
    getAllCocktails, getCocktail, updateCocktail, createCocktail, deleteCocktail
}