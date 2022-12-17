import react from "react";

const Textinput = (props) => {
    return  <input 
                type="text" 
                name={props.name} 
                onChange={(e) => props.inputChangeHandler(e)} 
                maxLength={props.limit}
                pattern={props.pattern}
            />
}

export default Textinput;