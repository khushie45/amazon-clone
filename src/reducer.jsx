export const initialState = {
    basket: []
}

export default function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //logic for adding items to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //logic
            return {state}
        default:
            return state
    }
}