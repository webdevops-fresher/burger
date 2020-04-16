import * as actionTypes from './actions';


const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


const initialState={
    ingredients:{
        salad:0,
        meat:0,
        bacon:0,
        cheese:0
    },
    totalPrice:4,
    maximumCustomisable:0
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
        default:
            return state
    }
}


export  default reducer;