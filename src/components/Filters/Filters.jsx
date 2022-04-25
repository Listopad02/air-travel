import "./Filters.css"
import Input from "../UI/Input/Input"
import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { useSelector, useDispatch } from "react-redux"
import { fetchMinInput, 
         fetchMaxInput,
         fetchOneTransfer,
         fetchZeroTransfer,
         fetchForEncrement,
         fetchForDecrement,
         fetchForTime,
         fetchAvia } from "../../store/slices/rootReducer"

const Filters = props => {
    let renderCompanies = null
    const [avia, setAvia] = useState({company: "", value: false})
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAvia(avia))
    }, [dispatch, avia])

    const stateCompanies = useSelector(state => state.flights.companies)

    if (stateCompanies !== []) {
        renderCompanies = () => {
            let companies = new Set()
            stateCompanies.forEach((item) => companies.add(item.caption))
            let result = []

            for (let company of companies) {
                result.push(company)
            }


            return result.map(company => {
                return (
                    <Input key={Math.random()} onChange={e => {
                        setAvia(
                            {company, value: e.target.checked}
                        )  
                    }} 
                    label={'- ' + company} type="checkbox"/>
                )
            })
        }      
    }
    
    return (
        <div className="Filter">
            <div className="Sort">
                <h3>Сортировать</h3>
                <Input onChange={e => dispatch(fetchForEncrement(e.target.checked))} label="- по возрастанию цены" name="sorted" type="radio"/>
                <Input onChange={e => dispatch(fetchForDecrement(e.target.checked))} label="- по убыванию цене" name="sorted" type="radio"/>
                <Input onChange={e => dispatch(fetchForTime(e.target.checked))} label="- по времени в пути" name="sorted" type="radio"/>
            </div>
            <div className="Sort">
                <h3>Фильтровать</h3>
                <Input label="- 1 пересадка" onChange={e => dispatch(fetchOneTransfer(e.target.checked))} type="checkbox"/>
                <Input label="- без пересадок" onChange={e => dispatch(fetchZeroTransfer(e.target.checked))} type="checkbox"/>
            </div>
            <div className="Sort">
                <h3>Цена</h3>
                <label htmlFor="">
                    От
                    <input type="text" onChange={e => dispatch(fetchMinInput(e.target.value))} style={{marginLeft: 5}} />
                </label>
                <label htmlFor="" style={{paddingTop: 15}}>
                    До
                    <input type="text" onChange={e => dispatch(fetchMaxInput(e.target.value))} style={{marginLeft: 5}} />
                </label>
            </div>
            <div className="Sort">
                <h3>Авиакомпании</h3>
                {
                    renderCompanies !== null ? renderCompanies() : null
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        companies: state.companies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchMinInput: min => dispatch(fetchMinInput(min)),
        fetchMaxInput: max => dispatch(fetchMaxInput(max)),
        fetchOneTransfer: val => dispatch(fetchOneTransfer(val)),
        fetchZeroTransfer: val => dispatch(fetchZeroTransfer(val)),
        fetchForEncrement: val => dispatch(fetchForEncrement(val)),
        fetchForDecrement: val => dispatch(fetchForDecrement(val)),
        fetchForTime: val => dispatch(fetchForTime(val)),
        fetchAvia: val => dispatch(fetchAvia(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)