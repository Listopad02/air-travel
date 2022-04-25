import Flight from "../../components/Flight/Flight"
import { fetchFlights, fetchCompany } from "../../store/slices/rootReducer"
import { connect, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Loader from "../../components/UI/Loader/Loader"
import "./FlightsList.css"

const FlightsList = props => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFlights())
    }, [dispatch])

    const flights = useSelector((state) => state.flights.result)
    const avia = useSelector((state) => state.flights.avia)
    const oneTransfer = useSelector((state) => state.flights.oneTransfer)
    const zeroTransfer = useSelector((state) => state.flights.zeroTransfer)
    const encrement = useSelector((state) => state.flights.encrement)
    const decrement = useSelector((state) => state.flights.decrement)
    const time = useSelector((state) => state.flights.time)
    const loading = useSelector((state) => state.flights.loading)
    const min = useSelector((state) => state.flights.min)
    const max = useSelector((state) => state.flights.max)

    const [counterTravels, setCounterTravels] = useState(2)
    const loadMore = () => {
        setCounterTravels(prev => prev + 2)
    }

    const aviaFilter = () => {
        return flights.filter(travel => {
            if (avia.value) {
                return travel.caption === props.avia.company
            } else {
                return travel
            }
        })
    }

    const priceFilter = (flights) => {
        return flights.filter(travel => {
            if ((min === '' && max === '')) {
                return travel
            } else if ((min !== '' && max !== '')) {
                return travel.passengerPrice > +min && travel.passengerPrice < +max
            } else if ((min !== '' && max === '')) {
                return travel.passengerPrice > +min
            } else if ((min === '' && max !== '')) {
                return travel.passengerPrice < +max
            }
        })
    }

    const transferFilter = (flights) => {
        return flights.filter(travel => {
            if ((!oneTransfer && !zeroTransfer) || (oneTransfer && zeroTransfer)) {
                return travel
            } 
        })
    }

    function byField(field) {
        return (a, b) => a[field] - b[field]
    }

    function byReverseField(field) {
        return (a, b) => b[field] - a[field]
    }
      
    const sortFilter = (flights) => {
        if (encrement) {
            return flights.sort(byField('passengerPrice'))
        } else if (decrement) {
            return flights.sort(byReverseField('passengerPrice'))
        } else if (time) {
            return flights.sort((a, b) => {
                return a-b
            })
        } else {
            return flights
        }
    }

    const renderTravels = () => {
        setTimeout(() => props.fetchCompany(flights.slice(0, counterTravels)), 0) 
        return flights.slice(0, counterTravels).map((flight, i) => {
        return (
            <div className="Travel" key={i}>
                    <div className="TravelHead">
                        <span>{flights[i].flight.carrier.caption}</span>
                        <div className="TravelHeadPrice">
                            <span className="TravelHeadPrice">{flights[i].flight.price.total.amount} ₽</span><br />
                            <span style={{float: 'right', fontSize: 16}}>Стоимость для одного взрослого пассажира</span> 
                        </div>
                    </div>
                    <Flight flights={flight.flight.legs} carrier={flight.flight.carrier} />
                    <div style={{width: '100%'}}>
                        <button className="btnWrite">ВЫБРАТЬ</button>
                    </div>
                </div>
        )
    })
    }  
    
    return (
        <div className="TravelsList">
            {    
                loading ? 
                <Loader /> :
                renderTravels(priceFilter(transferFilter(sortFilter(aviaFilter()))))
            }

            { 
                ((flights.length >= counterTravels + 2) && (renderTravels(priceFilter(transferFilter(sortFilter(aviaFilter())))).length !== 0)) ?
                <div style={{width: '90%', display: 'flex'}}><button className="btnLoad" onClick={loadMore}>Показать еще</button></div> :
                null
            }
            
        </div>
    )
}

// function mapStateToProps(state) {
//     return {
//         result: state.result,
//         loading: state.loading,
//         min: state.min,
//         max: state.max,
//         zeroTransfer: state.zeroTransfer,
//         oneTransfer: state.oneTransfer,
//         encrement: state.encrement,
//         decrement: state.decrement,
//         time: state.time,
//         avia: state.avia
//     }
// }

function mapDispatchToProps(dispatch) {
    return {
        fetchTravels: () => dispatch(fetchFlights()),
        fetchCompany: companies => dispatch(fetchCompany(companies))
    }
}

export default connect(null, mapDispatchToProps)(FlightsList)