import "./modal.css"
import {Logo} from "../Logo/Logo.jsx";
import itembg from "../../assets/itembg.svg"
import newleft from "../../assets/new.svg"
import newright from "../../assets/new2.svg"
import casino from "../../assets/casino.svg"

export const Modal = () => {

    return (
        <div className="modal">
            <div className='modal_items'>
                <img src={itembg} alt=""/>
                <div className="newleft">
                    <img src={newleft} alt=""/>
                </div>
                <div>
                    <img src={casino} alt="" className='casino'/>
                </div>
                <div className="newright">
                    <img src={newright} alt=""/>
                </div>

                <div className="modal__content">

                    <Logo/>
                </div>

            </div>


        </div>
    )
}
