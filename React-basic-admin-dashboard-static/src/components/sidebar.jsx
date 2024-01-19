"use client"
import { FaJediOrder, FaPaperclip, FaPrint } from "react-icons/fa";
import { BsHouseAddFill, BsListTask, BsPeople, BsPerson, } from "react-icons/bs";
const sidebar = ({ ekli }) => {
    return (
        <div className={`sidebar ${ekli}`}>
            <div className="sidebar-brand">
                <h1><span className="OMX-ico">OMX</span></h1>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li className="side-active"><a href="#"><BsHouseAddFill color="rgba(245, 245, 245, 0.703)" /><span> Dashboard</span></a></li>
                    <li><a href="#"><BsPeople color="rgba(245, 245, 245, 0.703)" /><span> Customers</span></a></li>
                    <li><a href="#"><FaPaperclip color="rgba(245, 245, 245, 0.703)" /><span> Projescts </span></a></li>
                    <li><a href="#"><FaJediOrder color="rgba(245, 245, 245, 0.703)" /><span> Orders</span></a></li>
                    <li><a href="#"><FaPrint color="rgba(245, 245, 245, 0.703)" /><span> Inventory</span></a></li>
                    <li><a href="#"><BsPerson color="rgba(245, 245, 245, 0.703)" /><span> Accounts</span></a></li>
                    <li><a href="#"><BsListTask color="rgba(245, 245, 245, 0.703)" /><span> Tasks</span></a></li>
                </ul>
            </div>
        </div>
    )
}

export default sidebar