import "./Flight.css"

const Flight = props => {
    const flights = props.flights

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
        </div>
    )
}

export default Flight