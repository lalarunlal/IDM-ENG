import React, { useEffect, useState }  from "react";
import Label from "../Components/lable";
import Datepicker from "../Components/datepicker";
import Picker from "../Components/picker";
import Textinput from "../Components/Textinput";
import RadioInput from "../Components/radio";
import TextAreaInput from "../Components/TextAreaInput";
import Tag from "../Components/tag";
import CheckboxInput from "../Components/checkbox";

const Home = () => {
    const [tagdata, setTagdata] = useState([
        {
            id:1, name: 'hotel'
        },
        {
            id:2, name: 'booking'
        },
        {
            id:3, name: 'labtest'
        },
    ])
    const [state, setState] = useState({
        roomQty:"",
        firstName: "",
        lastName: "",
        email:"",
        phoneNumber:"",
        streetName:"",
        streetNumber:"",
        zip:"",
        stateValue:"",
        city:"",
        extras:"",
        payment:"",
        personalNote:"",
        reminder:"",
        newsletter:"",
        confirm:""
    })
    const pickerData = [
        {
            id:1, value:'Standard Suite'
        },
        {
            id:2, value:'Business Suite'
        },
        {
            id:3, value:'Delux Suite'
        },
    ]
    const pickerExtraData = [
        {
            id:1, value:'Breakfast, Tv, WIFI, Lunch'
        },
        {
            id:2, value:'Tv'
        },
        {
            id:3, value:'Wifi'
        },
        {
            id:3, value:'Lunch'
        },
        {
            id:3, value:'Dinner'
        },
    ]
    const handleChange = (e) => {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
    }
    const handleClick = (item) => {
        setTagdata(tagdata.filter((data) => data.id !== item.id))
    }
    return(
        <React.Fragment>
            <div className="container">
                <div className="formWrap">
                    <div className="formRow">
                        <div className="formColumn">
                            <Label name="Date of Arrival"/>
                            <Datepicker Date=""/>
                        </div>
                        <div className="formColumn">
                            <Label name="Date of Depature"/>
                            <Datepicker Date=""/>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formColumn">
                            <Label name="Room Size"/>
                            <Picker Data={pickerData}/>
                            <div className="formIndication">
                                <Label name="Choose a room type"/>
                            </div>
                        </div>
                        <div className="formColumn">
                            <Label name="Room Quantity"/>
                            <Textinput limit="5" inputChangeHandler={handleChange} name="roomQty" pattern="" />
                            <div className="formIndication">
                                <Label name="Maximum: 5"/>
                            </div>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formColumn">
                            <Label name="First Name"/>
                            <Textinput limit="25" inputChangeHandler={handleChange} name="firstName" pattern="" />
                            <div className="formIndication textRight">
                                <Label name={`${state.firstName.length}/25`}/>
                            </div>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formColumn">
                            <Label name="Last Name"/>
                            <Textinput limit="50" inputChangeHandler={handleChange} name="lastName" pattern="" />
                            <div className="formIndication textRight">
                                <Label name={`${state.lastName.length}/50`}/>
                            </div>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formColumn">
                            <Label name="E-mail"/>
                            <Textinput limit="" inputChangeHandler={handleChange} name="email" pattern="" />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formColumn">
                            <Label name="Phone Number"/>
                            <Textinput limit="50" inputChangeHandler={handleChange} name="phoneNumber" pattern="" />
                            <div className="formIndication">
                                <Label name="Add your country code first"/>
                            </div>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formColumn">
                            <Label name="Street Name"/>
                            <Textinput limit="" inputChangeHandler={handleChange} name="streetName" pattern="" />
                        </div>
                        <div className="formColumn">
                            <Label name="Street Number"/>
                            <Textinput limit="" inputChangeHandler={handleChange} name="streetNumber" pattern="" />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formColumn">
                            <Label name="Zip"/>
                            <Textinput limit="" inputChangeHandler={handleChange} name="zip" pattern="" />
                        </div>
                        <div className="formColumn">
                            <Label name="State"/>
                            <Textinput limit="" inputChangeHandler={handleChange} name="stateValue" pattern="" />
                            <div className="formIndication">
                                <Label name="Add your country code first"/>
                            </div>
                        </div>
                        <div className="formColumn">
                            <Label name="City"/>
                            <Textinput limit="" inputChangeHandler={handleChange} name="city" pattern="" />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formColumn">
                            <Label name="Extras"/>
                            <Picker Data={pickerExtraData}/>
                        </div>
                    </div>
                    <div className="formRow">
                        <RadioInput id="CreditCard" value="Credit Card" inputChangeHandler={handleChange} name="payment" check="true"/>
                        <RadioInput id="Paypal" value="Paypal" inputChangeHandler={handleChange} name="payment" check=""/>
                        <RadioInput id="Cash" value="Cash" inputChangeHandler={handleChange} name="payment" check=""/>
                        <RadioInput id="Bitcoin" value="Bitcoin" inputChangeHandler={handleChange} name="payment" check=""/>
                    </div>
                    <div className="formRow">
                        <div className="formColumn">
                            <Label name="Personal Note"/>
                            <TextAreaInput limit="" inputChangeHandler={handleChange} name="personalNote" pattern="" />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formColumn formColumnFull">
                            <Label name="Tags"/>
                            <div className="tagSec">
                                {tagdata.map((item) => 
                                    <Tag item={item} handleClick={() => handleClick(item)}/>
                                )}
                            </div>
                            <div className="borderLine"></div>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formColumn formColumnFull">
                            <CheckboxInput 
                                id="reminder" 
                                value="reminder" 
                                inputChangeHandler={handleChange} 
                                name="reminder" 
                                check=""
                                title="Send me a reminder"
                                className="customCheckbox"
                            />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formColumn formColumnFull">
                            <CheckboxInput 
                                id="newsletter" 
                                value="newsletter" 
                                inputChangeHandler={handleChange} 
                                name="newsletter" 
                                check=""
                                title="Subscribe me a newsletter"
                                className="customCheckbox"
                            />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formColumn formColumnFull">
                            <CheckboxInput 
                                id="confirm" 
                                value="confirm" 
                                inputChangeHandler={handleChange} 
                                name="confirm" 
                                check=""
                                title="I Confirm the information given above"
                                className="customCheckboxSquare"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;