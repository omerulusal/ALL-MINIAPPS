import React from 'react';
import { BsInstagram, BsTwitter, BsFacebook } from "../../node_modules/react-icons/bs"

function footer() {
    return (
        <div className='footer'>
            <div className="socialMediaLinks">
                <div className="footerIcon d-inline">
                    <BsInstagram />
                </div>
                <div className="footerIcon d-inline">
                    <BsTwitter />
                </div>
                <div className="footerIcon d-inline">
                    <BsFacebook />
                </div>
            </div>
            <p> &copy; 2023 eatsie.com</p>
        </div>
    )
}

export default footer