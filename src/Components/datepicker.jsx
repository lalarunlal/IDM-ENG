import React, { useState } from "react";
import DatePicker from "react-datepicker";
import calender from '../Assets/Images/calender.png'

const Datepicker = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <> 
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <img src={calender} className="calenderIcon"/>
        </>
    )
}

export default Datepicker;