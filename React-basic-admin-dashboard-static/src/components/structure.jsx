'use client'
import React from 'react'
import { BsPersonFillGear, BsSearch } from 'react-icons/bs'
import { SiBuffer } from 'react-icons/si'

const structure = ({ toggle, ekli }) => {
    return (
        <div className={`${ekli}`}>
            <div className="main-content yapi ">
                <header className='header'>
                    <h1>
                        <label htmlFor="#">
                            <button className='burger' onClick={toggle}>
                                <SiBuffer color="rgba(245, 245, 245, 0.703)" />
                            </button>
                        </label>
                        Dashboard
                    </h1>
                    <div className="search-wrapper">
                        <BsSearch />
                        <input type="search" placeholder="Search here" />
                    </div>
                    <div className="user-wrapper">
                        <BsPersonFillGear
                            size="40px"
                            color="rgba(245, 245, 245, 0.703)" />
                        <div className='text-auth'>
                            <h4>
                                OMER ULUSAL
                            </h4>
                            <small>Admin</small>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default structure