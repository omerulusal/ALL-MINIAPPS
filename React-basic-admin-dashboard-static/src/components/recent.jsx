import React from 'react'
import { FaArrowAltCircleRight, FaCircle } from 'react-icons/fa'

const recent = () => {
    return (
        <div className='main-content recent kapsam'>
            <div className="recent-top">
                <h3>Recent Projects</h3>
                <button>See all <FaArrowAltCircleRight /></button>
            </div>
            <hr />
            <div className="recent-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Project Title</th>
                            <th>Department</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">UI/UX Design</td>
                            <td>UI Team</td>
                            <td><span><FaCircle color='purple' /></span>review</td>
                        </tr>
                        <tr>
                            <td scope="row">Web Development</td>
                            <td>Frontend</td>
                            <td><span><FaCircle color='pink' /></span>in progress</td>
                        </tr>
                        <tr>
                            <td scope="row">IOS Development</td>
                            <td>Backend</td>
                            <td><span><FaCircle color='orange' /></span>Pending</td>
                        </tr>

                        <tr>
                            <td scope="row">UI/UX Design</td>
                            <td>UI Team</td>
                            <td><span><FaCircle color='purple' /></span>review</td>
                        </tr>
                        <tr>
                            <td scope="row">Web Development</td>
                            <td>Frontend</td>
                            <td><span><FaCircle color='pink' /></span>in progress</td>
                        </tr>
                        <tr>
                            <td scope="row">IOS Development</td>
                            <td>Backend</td>
                            <td><span><FaCircle color='orange' /></span>Pending</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default recent