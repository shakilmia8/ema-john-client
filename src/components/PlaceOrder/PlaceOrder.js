import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/giphy.gif';



const PlaceOrder = () => {
    return (
        <div style={{ margin: '20px auto', textAlign: 'center' }}>
            <img width='500px' src={img} alt="" />
            <br />
            <button className="btn-regular"><Link style={{ textDecoration: 'none', color: 'black' }} to='/shop'>Back to Home</Link></button>
        </div>
    );
};

export default PlaceOrder;