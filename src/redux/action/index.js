export const addFavorite = (product) =>{
    return{
        type : "ADDITEM",
        payload : product
    }
}
export const delFavorite = (product) =>{
    return{
        type : "DELITEM",
        payload : product
    }
}