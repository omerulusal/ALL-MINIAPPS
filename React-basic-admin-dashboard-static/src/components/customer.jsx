"use client"
import React from 'react'
import { BsPerson, BsPersonFillGear } from 'react-icons/bs'
import { FaArrowAltCircleRight, FaComments, FaPhone } from 'react-icons/fa'


const customer = () => {

    return (
        <div className='main-content customer'>
            <div className="customer-top">
                <h3 className='person'>New Customer</h3>
                <button>See all <FaArrowAltCircleRight /></button>
            </div>
            <hr className='cust-hr' />
            <div className="customer-body">
                <div className="custs">
                    <div className="cust-img user-wrapper">
                        <BsPersonFillGear
                            size="30px"
                            color="rgba(245, 245, 245, 0.703)" />
                    </div>
                    <div className="cust-person">
                        <h3 className='person'>Omer Ulusal</h3>
                        <h3 className='person'><span className='status'>CEO Expert</span></h3>
                    </div>
                    <div className="contact">
                        <BsPerson cursor={"Pointer"} />
                        <FaComments cursor={"Pointer"} />
                        <FaPhone cursor={"Pointer"} />
                    </div>
                </div>
                <div className="custs">
                    {/* Cust-2 */}
                    <div className="cust-img user-wrapper">
                        <BsPersonFillGear
                            size="30px"
                            color="rgba(245, 245, 245, 0.703)" />
                    </div>
                    <div className="cust-person">
                        <h3 className='person'>Omer Ulusal</h3>
                        <h3 className='person'><span className='status'>CEO Expert</span></h3>
                    </div>
                    <div className="contact">
                        <BsPerson cursor={"Pointer"} />
                        <FaComments cursor={"Pointer"} />
                        <FaPhone cursor={"Pointer"} />
                    </div>
                </div>


                <div className="custs">
                    {/* Cust-2 */}
                    <div className="cust-img user-wrapper">
                        <BsPersonFillGear
                            size="30px"
                            color="rgba(245, 245, 245, 0.703)" />
                    </div>
                    <div className="cust-person">
                        <h3 className='person'>Omer Ulusal</h3>
                        <h3 className='person'><span className='status'>CEO Expert</span></h3>
                    </div>
                    <div className="contact">
                        <BsPerson cursor={"Pointer"} />
                        <FaComments cursor={"Pointer"} />
                        <FaPhone cursor={"Pointer"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default customer