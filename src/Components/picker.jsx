import react from "react";

const Picker = (props) => {
    return  <>  
                <select>
                    <option>Select</option>
                    {props.Data.map((data) => 
                        <option>{data.value}</option>
                    )}
                </select>
                <span className="optionCaret"></span>
            </>
}

export default Picker;