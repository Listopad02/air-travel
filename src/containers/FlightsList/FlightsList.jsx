import Flight from "../../components/Flight/Flight"
import { fetchFlights } from "../../store/actions/actions"
import { connect } from "react-redux"
import "./FlightsList.css"

const FlightsList = props => {
    return (
        <div className="Travel">
            <div className="TravelHead">
                {/* <span>{props.result[0].flight.carrier.caption}</span> */}
                <div className="TravelHeadPrice">
                    <span className="TravelHeadPrice">10000 ₽</span><br />
                    <span style={{float: 'right', fontSize: 16}}>Стоимость для одного взрослого пассажира</span> 
                </div>
            </div>
            <Flight />
            <div style={{width: '100%'}}>
                <button className="btnWrite">ВЫБРАТЬ</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(FlightsList)