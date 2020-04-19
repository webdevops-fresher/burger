import * as actionTypes from './actions';
import axios from '../../axios-orders';


export const addIngredient=(ingredient)=>{
    return {
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:ingredient
    }
}


export const removeIngredient=(ingredient)=>{
    return {
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:ingredient
    }
}

export const setIngredients=(fetchedIngredients)=>{
    console.log('actionCreator:',fetchedIngredients);
    return {
        type:actionTypes.INIT_INGREDIENTS,
        ingredients:fetchedIngredients
    }
}

export const initIngredients=()=>{
    console.log('initIngredients');
    return dispatch=>{
        axios.get('/ingredients.json').then(response=>{
            console.log(response);
            dispatch(setIngredients(response.data))
        }).catch(error=>{
        })
    }
}



export const resetPrice=()=>{
    return {
        type:actionTypes.RESET_PRICE
    }
}


export const sendOrders=(orders)=>{
    console.log(orders);
    return {
        type:actionTypes.FETCH_ORDERS,
        orders:orders
    }
}

export const fetchOrders=()=>{
    return dispatch=>{
        axios.get('/orders.json').then(response=>{
            dispatch(sendOrders(response.data))
        })
    }
}


export const clearIngredients=()=>{
    console.log('action creators');
    return {
        type:actionTypes.CLEAR_INGREDIENTS
    }
}