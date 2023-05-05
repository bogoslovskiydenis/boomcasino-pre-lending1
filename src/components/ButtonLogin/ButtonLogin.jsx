import React, {useContext, useState} from "react";
import "./buttonreg.css"
import {EmailRegistrationForm} from "../EmailRegistrationForm/EmailRegistrationForm.jsx";

export const ButtonLogin = (props) => {
    const [registrationType, setRegistrationType] = useState(true);
    const [activeButton, setActiveButton] = useState(true);

    const handlePhoneRegistration = () => {
        setRegistrationType(true);
        setActiveButton(true)
    };

    const handleEmailRegistration = () => {
        setRegistrationType(false);
        setActiveButton(false)
    };

    const renderRegistrationForm = () => {
        if (registrationType === true) {
            return (
                <div></div>

            );
        } else if (registrationType === false) {
            return (
               < EmailRegistrationForm/>


            );
        } else {
            return null;
        }
    };
    return (
        <div className={`btn ${activeButton ? 'focus' : ``} `}>
            <button className="phone_login" onClick={handlePhoneRegistration}>Номер телефона</button>
            <button className="mail_login" onClick={handleEmailRegistration}>Почта</button>
            {renderRegistrationForm()}
        </div>
    );
}

