import React, {useState} from "react";
import 'react-international-phone/style.css';
import "./emailRegForm.css"

export const EmailRegistrationForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        // Regular expressions to validate email and password
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            setSubmitting(false);
            return;
        }

        if (!passwordRegex.test(password)) {
            setError('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.');
            setSubmitting(false);
            return;
        }

        try {
            const response = await fetch(
                'https://umbrella-back.webtoolteam.com/api/external/auth/register',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        email: email, password: password,
                        "api_key": "17932070d329078091b886306a3c08f29995dc95"
                    })
                });

            if (response.status === 200) {
                setSuccess(true);
                setEmail('');
                setPassword('');
            } else {
                throw new Error(`Unexpected response: ${response.status}`);
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 403) {
                    setError('Unauthorized request. Please try again with valid credentials.');
                } else if (error.response.status === 422) {
                    setError('Email is already registered. Please enter a different email address.');
                } else {
                    setError(`Request failed with status code ${error.response.status}`);
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

    if (success) {
        window.location.href = 'https://umbrella.webtoolteam.com?oauth=95ddb0e6cb1989d371d50d09f3fdbc42'; // Redirect to Boom Casino
        return null;
    }

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    return (

        <div className='email_input'>
            <form action="" onSubmit={handleSubmit}>
                <input className="email ele"
                       value={email}
                       type="email"
                       placeholder="Почта"
                       onChange={handleInputChange}
                />
                <input className="password ele"
                       value={password}
                       type="password"
                       placeholder="Пароль"
                       onChange={handlePasswordChange}
                />

                <button className="button_reg" disabled={submitting}
                        onClick={handleSubmit}>{submitting ? `Отправка` : `Войти`}</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    )
}
