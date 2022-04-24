import "./Input.css"

const Input = props => {
    const inputType = props.type
    const name = props.name
    const htmlFor = `${inputType}-${Math.random()}`

    return (
        <div className="Input">
            <label htmlFor={htmlFor}>
                <input 
                    type={inputType}
                    id={htmlFor}
                    name={name}
                    value={props.value}
                    onChange={props.onChange}
                />
                { props.label }
            </label>
        </div>
    )
    
}

export default Input