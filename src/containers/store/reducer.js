import * as actionTypes from './actions';


const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


const initialState={
    ingredients:null,
    totalPrice:4,
    maximumCustomisable:0,
    orders:null
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]+1
                },
                totalPrice:state.totalPrice+INGREDIENTS_PRICES[action.ingredientName],
                maximumCustomisable:state.maximumCustomisable+1
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]-1
                },
                totalPrice:state.totalPrice-INGREDIENTS_PRICES[action.ingredientName],
                maximumCustomisable:state.maximumCustomisable-1


            }
        case actionTypes.INIT_INGREDIENTS:
            return {
                ...state,
                ingredients:action.ingredients
            }
        case actionTypes.FETCH_ORDERS:
            return {
                ...state,
                orders:action.orders
            }
        case actionTypes.RESET_PRICE:
            return {
                ...state,
                totalPrice:4
            }
        case actionTypes.CLEAR_INGREDIENTS:
            console.log('reducer');
                return {
                    ...state,
                    ingredients:null,
                    maximumCustomisable:0
                }
        default:
            return state
    }
}


export  default reducer;