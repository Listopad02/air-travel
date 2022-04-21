import "./Flight.css"

const Flight = () => {
    return (
        <div>
            <div style={{
                width: '100%',
                padding: '5px 10px'
            }}>
                <span style={{color: '#1E90FF'}}>
                    Москва, ШЕРЕМЕТЬЕВО
                    <span style={{fontSize: 20, padding: "0 15px 0 15px"}}>→ </span>
                </span> 
                <span style={{color: '#1E90FF'}}>Лондон, Хитроу</span>
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
                    Рейс выполняет: Аэрофлот
                </p>
            </div>
        </div>
    )
}

export default Flight