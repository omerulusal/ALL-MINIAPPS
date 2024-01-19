import React from 'react';


function card(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="row shadow">
                    <div className="card bg-dark text-white">
                        <div className="card-body text-center">
                            <h5 className="card-title">{props.title}</h5>
                            <div className="card-img img-fluid">
                                <img src={props.resim} className='img-fluid rounded shadow' alt="animal1" />
                            </div>
                            <p className="card-text mt-1">{props.text}</p>
                            <button className='btn btn-outline-success btn-lg px-4'>More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default card