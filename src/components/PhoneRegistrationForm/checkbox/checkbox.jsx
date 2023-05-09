import {useState} from "react";
import "./checkbox.css"

const Checkbox = ({ label, checked, ...props }) => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
    return (
        <div className="checkbox-wrapper">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
                {...props}
            />
            <label >{label}</label>
        </div>
    );
};
export default Checkbox;