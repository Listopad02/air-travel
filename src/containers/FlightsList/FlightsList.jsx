import Flight from "../../components/Flight/Flight"
import { fetchFlights } from "../../store/reducers/rootReducer"
import { connect, useDispatch } from "react-redux"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import "./FlightsList.css"

const FlightsList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFlights())
    }, [dispatch])

    const flights = useSelector((state) => state.flights.result)
    
    return (
        <>
            {
            flights?.map(flight => 
                <div className="Travel" key={Math.random()}>
                    <div className="TravelHead">
                        {/* <span>{props.result[0].flight.carrier.caption}</span> */}
                        <div className="TravelHeadPrice">
                            <span className="TravelHeadPrice">10000 ₽</span><br />
                            <span style={{float: 'right', fontSize: 16}}>Стоимость для одного взрослого пассажира</span> 
                        </div>
                    </div>
                    <Flight flights={flight.flight.legs} />
                    <div style={{width: '100%'}}>
                        <button className="btnWrite">ВЫБРАТЬ</button>
                    </div>
                </div>
                )
            }
        </>
    )
}

function mapStateToProps(state) {
    return {
        result: state.result
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFlights: () => dispatch(fetchFlights())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightsList)