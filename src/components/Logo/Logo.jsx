import logo from "../../assets/Logo.svg";
import "./logo.css"

export const Logo = () => {

    return (
        <div className="form_header">
            <img src={logo} className="app-logo" alt="logo"/>
        </div>
    )
}
