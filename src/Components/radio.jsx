import react from "react";

const RadioInput = (props) => {
    return  (
            <div className="customRadio">
                <input 
                    defaultChecked={props.check}
                    type="radio" 
                    name={props.name} 
                    onChange={(e) => props.inputChangeHandler(e)} 
                    id={props.id}
                />
                <label for={props.id}></label>
                <span className="radioLabel">{props.value}</span>
            </div>
    )
}

export default RadioInput;