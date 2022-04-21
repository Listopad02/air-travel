import Flight from "../../components/Flight/Flight"
import "./FlightsList.css"

const FlightsList = props => {
    return (
        <div className="Travel">
            <div className="TravelHead">
                <span>Аэрофлот</span>
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

export default FlightsList