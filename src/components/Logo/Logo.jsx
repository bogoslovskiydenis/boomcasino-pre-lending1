import logo from "../../assets/Logo.svg";
import "./logo.css"
import bonus from "../../assets/bonus.svg";

export const Logo = () => {

    return (
        <div className="form_header">
            <img src={logo} className="app-logo" alt="logo"/>
            <div className="bonus">
                <img src={bonus} alt=""/>
            </div>
        </div>
    )
}
