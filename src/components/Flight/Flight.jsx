import "./Flight.css"

const Flight = props => {
    const flights = props.flights
    const carrier = props.carrier

    const travelTime = (mins) => {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return hours + ' ч ' + minutes + ' мин';
    }

    const days =["вск", "пн", "вт", "ср", "чт", "пт", "сб"];

    return (
        <div>
            {
                flights?.map(flight => 
                    <div key={Math.random()}>
                    <div style={{ width: '100%', padding: '5px 10px' }}>
                        <span style={{color: '#1E90FF'}}>
                            { flight.segments[0].departureCity ? 
                              flight.segments[0].departureCity.caption : <div></div>
                            },&nbsp;
                            { flight.segments[0].departureAirport ?
                              flight.segments[0].departureAirport.caption : <div></div>
                            }
                            <span style={{fontSize: 20, padding: "0 15px 0 15px"}}>→ </span>
                        </span> 
                        <span style={{color: '#1E90FF'}}>
                            { flight.segments[0].arrivalAirport ? 
                              flight.segments[0].arrivalAirport.caption : <div></div>
                            }
                        </span>
                        <hr style={{opacity: .3}}/>
                    </div>
                    <div className="Time">
                        <div>
                            <span style={{fontSize: 23, color: '#000'}}>
                                { new Date(flight.segments[0].departureDate).getUTCHours() + ':' + (
                                  new Date(flight.segments[0].departureDate).getUTCMinutes().toString().length === 1 ?
                                  new Date(flight.segments[0].departureDate).getUTCMinutes() + '0' : 
                                  new Date(flight.segments[0].departureDate).getUTCMinutes() + ' ')}
                            </span> 
                            <span style={{fontSize: 18, color: '#1E90FF', paddingLeft: 20}}>
                                { new Date(flight.segments[0].departureDate).getDate() + ' ' } 
                                { new Date(flight.segments[0].departureDate).toLocaleString('ru', { month: 'short' }) + ' '}
                                { days[new Date(flight.segments[0].departureDate).getUTCDay()] + ' ' }
                            </span>
                        </div>
                        <div style={{fontSize: 23, margin: '0 auto', color: "#000"}}>
                            &#9719; { travelTime(flight.segments[0].travelDuration) }
                        </div>
                        <div>
                            <span style={{fontSize: 18, color: '#1E90FF', paddingRight: 20}}>
                                { new Date(flight.segments[0].arrivalDate).getDate() + ' ' } 
                                { new Date(flight.segments[0].arrivalDate).toLocaleString('ru', { month: 'short' }) + ' ' }
                                { days[new Date(flight.segments[0].arrivalDate).getUTCDay()] }
                            </span> 
                            <span style={{fontSize: 23, color: '#000'}}>
                                { new Date(flight.segments[0].arrivalDate).getUTCHours() + ':' + (
                                  new Date(flight.segments[0].arrivalDate).getUTCMinutes().toString().length === 1 ?
                                  new Date(flight.segments[0].arrivalDate).getUTCMinutes() + '0' : 
                                  new Date(flight.segments[0].departureDate).getUTCMinutes() + ' ')}
                                {/* 21:45 */}
                            </span>
                        </div>
                        <br />
                        {
                            // i couldn't find any information about transfers in the file, so I'm just making it random
                            Math.random() >= 0.5 ?
                            <div className="hrSect">
                                <span style={{color: '#FF8C00'}}>1 пересадка</span>
                            </div> :
                            <div className="hrSect2">
                                <p></p>
                            </div>
                        }
                        
                    </div>
                    <div>
                        <p style={{padding: "0px 10px", color: "#000"}}>
                            Рейс выполняет: {carrier.caption}
                        </p>
                    </div>
                    </div>
                )
            }
        </div>
    )
}

export default Flight