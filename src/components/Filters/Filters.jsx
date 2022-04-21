import "./Filters.css"
import Input from "../UI/Input/Input"

const Filters = props => {
    return (
        <div className="Filter">
            <div className="Sort">
                <h3>Сортировать</h3>
                <Input label="- по возрастанию цены" name="sorted" type="radio"/>
                <Input label="- по убыванию цене" name="sorted" type="radio"/>
                <Input label="- по времени в пути" name="sorted" type="radio"/>
            </div>
            <div className="Sort">
                <h3>Фильтровать</h3>
                <Input label="- 1 пересадка" type="checkbox"/>
                <Input label="- без пересадок" type="checkbox"/>
            </div>
            <div className="Sort">
                <h3>Цена</h3>
                <label htmlFor="">
                    От
                    <Input type="text" style={{marginLeft: 5}} />
                </label>
                <label htmlFor="" style={{paddingTop: 15}}>
                    До
                    <Input type="text" style={{marginLeft: 5}} />
                </label>
            </div>
            <div className="Sort">
                <h3>Авиакомпании</h3>
                <Input label="- LOT Polish Airlines" name="sorted" type="checkbox"/>
                <Input label="- Аэфрофлот" name="sorted" type="checkbox"/>
            </div>
        </div>
    )
}

export default Filters