import axios from "axios";
import { BUTTON_CLICK_HANDLER,
         PUSH_FLIGHTS } from "./actionTypes"

export function filterHandler() {
    return {
        type: BUTTON_CLICK_HANDLER
    }
}

export function pushFlights(val) {
    return {
        type: PUSH_FLIGHTS,
        payData: val
    }
}

export function fetchFlights() {
    return async(dispatch) => {
        dispatch(filterHandler())

        const url = 'http://localhost:3000/flights.json'

        try {
            await axios.get(url).then(data => {
                const response = data.data.result.flights
                dispatch(pushFlights(response))
            })
        } catch (err) {
            console.log(err)
        }
    }      
}