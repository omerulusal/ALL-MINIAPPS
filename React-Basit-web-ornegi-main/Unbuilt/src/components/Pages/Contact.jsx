import React from 'react'

function Contact() {
    return (
        <div>
            <div className="contact">
                <h1 className="head">Contact Us</h1>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" className="form-control" />

                    <label for="surname">Surname:</label>
                    <input type="text" id="surname" className="form-control" />


                    <label for="phn">Phone:</label>
                    <input type="tel" id="phn" className="form-control" />

                    <label for="adr">Adress:</label>
                    <textarea type="text" id="adr" className="form-control" />

                    <button type='submit' className='btn btn-warning text-white'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;