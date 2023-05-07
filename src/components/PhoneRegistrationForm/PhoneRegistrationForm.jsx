import React, {useState} from "react";
// import {PhoneInput} from "react-international-phone";
// import 'react-international-phone/style.css';
import "./phoneRegistration.css"

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ru from "react-phone-input-2/lang/ru.json";

export const PhoneRegistrationForm = (props) => {
    const [isValid, setIsValid] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        setIsLoading(true);

        // const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
        // if (!phoneRegex.test(phoneRegex)) {
        //     setError('Пожалуйста, введите действительный телефон');
        //     setSubmitting(false);
        //     return;
        // }

        try {
            const response = await fetch('https://umbrella-back.webtoolteam.com/api/external/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    phone: phoneNumber,
                    "api_key": "17932070d329078091b886306a3c08f29995dc95"
                })
            });
            if (response.status === 200) {
                setSuccess(true);
                setPhoneNumber('');
                setTimeout(() => {
                    window.location.href = 'https://umbrella.webtoolteam.com?oauth=95ddb0e6cb1989d371d50d09f3fdbc42';
                }, 2000);
            } else {
                throw new Error('Номер телефона уже зарегистрирован');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 403) {
                    setError('');
                } else if (error.response.status === 422) {
                    setError('Номер телефона уже зарегистрирован. Пожалуйста, введите другой номер телефона.');
                } else {
                    setError(`Пожалуйста, введите другой номер телефона!`);
                }
            } else if (error.message) {
                setError(error.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setSubmitting(false);
        }
    };

    console.log("🚀 ~ file: Form.js ~ line 63 ~ handleSubmit: ", handleSubmit);


    const handlePhoneChange = (event) => {

        setPhoneNumber(event.target.value);
        // const inputphoneNumber = event.target.value;
        //
        // setPhoneNumber(!phoneRegex.test(inputphoneNumber))
        // if (inputphoneNumber) {
        //     setError('Please enter a valid phone number.');
        //     setIsValid(false);
        // } else {
        //     setIsValid(true);
        // }
    };

    // if (success) {
    //     window.location.href = 'https://umbrella.webtoolteam.com?oauth=95ddb0e6cb1989d371d50d09f3fdbc42'; // Redirect to Boom Casino
    // }else {
    //
    // };

    return (

        <div className='phone_input'> {success ? (<div>Thank you for registering your phone number!</div>) :
            <form action="" onSubmit={(e) => {
                // some submit logic
                e.preventDefault();
                alert(`Submitted phone: ${phoneNumber}`);
            }}>
                {/*<PhoneInput*/}
                {/*    inputStyle={{*/}
                {/*        width: `285px`,*/}
                {/*        height: `36px`*/}
                {/*    }}*/}
                {/*    flagClassName={{*/}
                {/*        width: `30px`,*/}
                {/*        height: `31px`, borderRadius: `50%`*/}
                {/*    }}*/}
                {/*    className='input_phone'*/}
                {/*    defaultCountry="kz"*/}
                {/*    defaultMask={` `}*/}
                {/*    value={phoneNumber}*/}
                {/*    onChange={setPhoneNumber}*/}
                {/*    charAfterDialCode={' '}*/}
                {/*    disableDialCodeAndPrefix={false}*/}
                {/*    showDisabledDialCodeAndPrefix={false}*/}
                {/*    lengthMatch={true}*/}
                {/*/>*/}
                <PhoneInput
                    inputClass={{colora: "red"}}
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    preferredCountries={["ru", "kz"]}

                    inputStyle={{borderRadius: "20px", paddingLeft: "90px", width: "326px"}}
                    buttonStyle={{borderRadius: "20px ", width: "80px"}}
                    dropdownStyle={{borderRadius: "20px", width: "200px", paddingLeft: "10px"}}
                    containerStyle={{borderRadius: "20px", width: "100px"}}
                    searchStyle={{borderRadius: "20px"}}

                />
                <div className='check_box'><input type="checkbox" name='agree'/> <label
                    className='check_box' htmlFor="ch1">Я подтверждаю, что
                    мне исполнился 21 год, и согласен с Условиями сайта.</label>
                </div>
                <div className='check_box'><input type="checkbox" name='agree'/> <label
                    className='check_box'
                    htmlFor="ch1">Я хочу получать рекламные сообщения, новости казино, бонусы и эксклюзивные
                    предложения.</label>
                </div>
                <button className="button_reg"
                        onClick={handleSubmit}><span
                    className="span_btn">{submitting ? "ЗАРЕГИСТРИРОВАТЬСЯ" : "ЗАРЕГИСТРИРОВАТЬСЯ"}</span></button>
                {isLoading && <div>Loading...</div>}
                {error && <div className='error'>{error}</div>}
                <div>У вас уже есть аккаунт? <span>Войти</span></div>
                <input className="password ele"
                       type="password"
                       placeholder="Есть промокод?"
                />
            </form>}
        </div>
    )
}


