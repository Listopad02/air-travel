import "./Flight.css"
import { fetchFlights } from "../../store/actions/actions"
import { connect, useDispatch } from "react-redux"
import { useEffect } from "react"


const Flight = props => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFlights())
    })

    return (
        <div>
            <div style={{ width: '100%', padding: '5px 10px' }}>
                <span style={{color: '#1E90FF'}}>
                    { props.result[0].flight.legs[0].segments[0].departureCity.caption },&nbsp;
                    { props.result[0].flight.legs[0].segments[0].departureAirport.caption }
                    <span style={{fontSize: 20, padding: "0 15px 0 15px"}}>→ </span>
                </span> 
                <span style={{color: '#1E90FF'}}>
                    { props.result[0].flight.legs[0].segments[0].arrivalAirport.caption }
                </span>
                <hr style={{opacity: .3}}/>
            </div>
            <div className="Time">
                <div>
                    <span style={{fontSize: 23, color: '#000'}}>
                        18:10
                    </span> 
                    <span style={{fontSize: 18, color: '#1E90FF', paddingLeft: 20}}>
                        19 авг. ср
                    </span>
                </div>
                <div style={{fontSize: 23, margin: '0 auto', color: "#000"}}>
                    &#9719; 3 ч 35 мин
                </div>
                <div>
                    <span style={{fontSize: 18, color: '#1E90FF', paddingRight: 20}}>
                        19 авг. ср 
                    </span> 
                    <span style={{fontSize: 23, color: '#000'}}>
                        21:45
                    </span>
                </div>
                <br />
                <div className="hrSect">
                    <span style={{color: '#FF8C00'}}>1 пересадка</span>
                </div>
            </div>
            <div>
                <p style={{padding: "0px 10px", color: "#000"}}>
                    {/* Рейс выполняет: {props.result[0].flight.carrier.caption} */}
                </p>
            </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Flight)