import React from 'react';

function About() {
    return (
        <div>
            <div className="AboutTop"></div>
            <div className="AboutBody">
                <h1 className='AboutTitle'>About Us</h1>
                <p className='AboutText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quaerat dolor fugiat saepe ducimus doloribus voluptas hic atque reprehenderit, cum ab iure rerum ratione porro aliquid nisi. Repudiandae, pariatur a!</p>
            </div>
            <div className="AboutImg">
                <img src="img/1.jpg" alt="" className="img-fluid d-inline rounded" />
            </div>
        </div>
    )
}

export default About;