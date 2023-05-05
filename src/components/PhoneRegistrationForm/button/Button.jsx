import { useState } from "react";
import './button.css'
import {PhoneRegistrationForm} from "../PhoneRegistrationForm.jsx";
import {EmailRegistrationForm} from "../../EmailRegistrationForm/EmailRegistrationForm.jsx";

export const RegistrationForm=()=> {
    const [activeTab, setActiveTab] = useState("phone");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="tabs">
                <div
                    className={`tab ${activeTab === "phone" ? "active" : ""}`}
                    onClick={() => handleTabClick("phone")}
                >
                    <span className='btn_span'>Номер телефона</span>
                </div>
                <div
                    className={`tab ${activeTab === "email" ? "active" : ""}`}
                    onClick={() => handleTabClick("email")}
                >
                    <span className='btn_span'>Электронная почта</span>
                </div>
            </div>
            {activeTab === "phone" ? (
                <PhoneRegistrationForm/>
            ) : (
                <EmailRegistrationForm/>
            )}
        </div>
    );
}
