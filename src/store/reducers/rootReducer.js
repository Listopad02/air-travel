import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const fetchFlights = createAsyncThunk(
    'flights/fetchFlights',
    async (_, { rejectWithValue, dispatch }) => {
        dispatch(filterHandler())

        const url = 'http://localhost:3000/flights.json'

        try {
            await axios.get(url).then(data => {
                const response = data.data.result.flights
                dispatch(push(response))
            })
        } catch (err) {
            console.log(err)
        }
    }      
)


const initialState = {
    result: [],
    loading: false
}

export const flightsSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
        filterHandler: (state, action) => {
            state.loading = true
        },
        push: (state, action) => {
            state.result = action.payload
        }
    },
    extraReducers: {
        [fetchFlights.pending]: () => console.log('fullfiled')
    }
})

export const {filterHandler, push} = flightsSlice.actions
export default flightsSlice.reducer

