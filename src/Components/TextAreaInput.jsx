import react from "react";

const TextAreaInput = (props) => {
    return  <textarea 
                name={props.name} 
                onChange={(e) => props.inputChangeHandler(e)} 
                maxLength={props.limit}
            ></textarea>
}

export default TextAreaInput;