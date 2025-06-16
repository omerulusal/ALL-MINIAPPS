import React from 'react';


function card(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="row shadow">
                    <div className="card bg-dark text-white h-100">
                        <div className="card-body text-center d-flex flex-column">
                            <h5 className="card-title">{props.title}</h5>
                            <div className="card-img mb-3 img-fluid">
                                <img 
                                src={props.resim} 
                                className='img-fluid rounded shadow' 
                                alt={props.title}
                                style={{maxHeight:"200px",objectFit:"cover"}}
                                />
                            </div>
                            <p className="card-text flex-grow-1 mt-1">{props.text}</p>
                            <button className='btn btn-outline-success btn-lg px-4 mt-auto'>More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default card