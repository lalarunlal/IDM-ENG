import react from "react";

const CheckboxInput = (props) => {
    return  (
            <div className={props.className}>
                <input 
                    type="checkbox" 
                    name={props.name} 
                    onChange={(e) => props.inputChangeHandler(e)} 
                    id={props.id}
                />
                <label for={props.id}></label>
                <span className="radioLabel">{props.title}</span>
            </div>
    )
}

export default CheckboxInput;