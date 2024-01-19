import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='home'>
            <div className="header-container">
                <h1 className='header'>EATSIE</h1>
                <p className='Birci'>if you are hungry you can come to Eatsie </p>
                <Link to="/menu"><button className='btn btn-dark order'>Order Now</button></Link>
                <img src="img/3.jpg" alt="" className='imgMain' />
            </div>
        </div>
    )
}

export default Home;