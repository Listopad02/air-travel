import { configureStore } from "@reduxjs/toolkit"
import { BUTTON_CLICK_HANDLER, 
         PUSH_FLIGHTS } from "../actions/actionTypes"

const initialState = {
    result: [],
    loading: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUTTON_CLICK_HANDLER:
            return {
                ...state,
                loading: true
            }
        case PUSH_FLIGHTS: 
            return  {
                ...state, 
                result: action.payData
            }
        default:
            return state
    }
}

const store = configureStore({
    reducer: rootReducer
})

export default store