import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading: true,
    result: [],
    companies: [],
    min: '',
    max: '',
    zeroTransfer: null,
    oneTransfer: null,
    encrement: null,
    decrement: null,
    time: null,
    avia: null
}

export const fetchFlights = createAsyncThunk(
    'flights/fetchFlights',
    async (_, { rejectWithValue, dispatch }) => {
        dispatch(fetchTravelsStart())

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

export const flightsSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
        fetchTravelsStart: (state, action) => {
            state.loading = true
        },
        push: (state, action) => {
            state.result = action.payload
            state.loading = false
        },
        fetchMinInput: (state, action) => {
            state.min = action.payload
        },
        fetchMaxInput: (state, action) => {
            state.max = action.max
        },
        fetchZeroTransfer: (state, action) => {
            state.zeroTransfer = action.payload
        },
        fetchOneTransfer: (state, action) => {
            state.oneTransfer = action.payload
        },
        fetchForEncrement: (state, action) => {
            state.encrement = action.payload
        },
        fetchForDecrement: (state, action) => {
            state.decrement = action.payload
        },
        fetchForTime: (state, action) => {
            state.time = action.payload
        },
        fetchAvia: (state, action) => {
            state.avia = action.payload
        },
        fetchCompany: (state, action) => {
            state.companies = action.payload
        }
    },
    extraReducers: {
        [fetchFlights.pending]: () => console.log('fullfiled')
    }
})

export const {fetchTravelsStart, push, fetchMinInput,
              fetchMaxInput, fetchZeroTransfer,
              fetchOneTransfer, fetchForEncrement, fetchForDecrement,
              fetchForTime, fetchAvia, fetchCompany} = flightsSlice.actions
export default flightsSlice.reducer

