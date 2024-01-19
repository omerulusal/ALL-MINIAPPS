import { FaPaperclip, } from "react-icons/fa";
import { BsBank, BsBasketFill, BsPeople, } from "react-icons/bs";

const kart = () => {

    const divStyle = {
        color: 'rgba(245, 245, 245, 0.703)',
        padding: '0',
        text: 'center',
    };

    return (
        <div className="main-content cards" style={divStyle}>
            <div className="card-single">
                <div className="tops">
                    <h1>31</h1>
                    <span>Customers</span>
                </div>
                <div>
                    <BsPeople size="50px" />
                </div>
            </div>

            <div className="card-single">
                <div className="tops">
                    <h1>69</h1>
                    <span>Projects</span>
                </div>
                <div>
                    <FaPaperclip size="50px" />
                </div>
            </div>

            <div className="card-single">
                <div className="tops">
                    <h1>52</h1>
                    <span>Orders</span>
                </div>
                <div>
                    <BsBasketFill size="50px" />
                </div>
            </div>

            <div className="card-single">
                <div className="tops">
                    <h1>31</h1>
                    <span>Income</span>
                </div>
                <div>
                    <BsBank size="50px" />
                </div>
            </div>
        </div>
    )
}

export default kart