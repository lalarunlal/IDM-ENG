import react from "react";
import close from '../Assets/Images/close.png'

const Tag = (props) => {
    return  (
            <div className="tag">
                {props.item.name}
                <img src={close} alt="close" onClick={() => props.handleClick()}/>
            </div>
    )
}

export default Tag;