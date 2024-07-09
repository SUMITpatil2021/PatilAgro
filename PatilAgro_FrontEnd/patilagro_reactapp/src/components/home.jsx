import React from "react";
import './homepage.css'
import { Navigate,Link ,useNavigate, Routes} from "react-router-dom";
import UserLogin from "./userlogin";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Home(){
    const navigate = useNavigate();
   
    const redirectTo = () => {
        navigate('/login');
    };
    return(
        <>
       <div className="promotion-container">
      <img src="/images/organic_farm.jpg" alt="Organic Farm" className="promotion-image" />
      <div className="promotion-text">
        <h2>Welcome to Patil AgroMart <FontAwesomeIcon icon={faShoppingCart} /> </h2> <br />
        <p>
          At Patil AgroMart, we provide fresh and organic agro products straight from our farms to your table.
          Our commitment to quality ensures you enjoy the best of nature, sustainably grown and harvested with care.
        </p>
      </div>
    </div>

        <div className='row'>
        <div>
          <h3 className="section-title">Our Fresh and Organic Products</h3>
        </div>
         <section className="cards col ">
           <div className="card">
             <img src="/images/banana.jpg" alt="" />
             <h3>Banana</h3>
             <p className='btn btn-success' onClick={redirectTo}> <FontAwesomeIcon icon={faShoppingCart} />   Add to Cart </p>
           </div>
           <div className="card col">
             <img src="/images/watermelon.jpg" alt="" />
             <h3>Fresh Watermelon</h3>
             <p className='btn btn-success'onClick={redirectTo}> <FontAwesomeIcon icon={faShoppingCart} />  Add to Cart</p>
           </div>
           <div className="card col">
             <img src="/images/flower.jpg" alt="" />
             <h3>Cauliflower</h3>
             <p className='btn btn-success'onClick={redirectTo}> <FontAwesomeIcon icon={faShoppingCart} />  Add to Cart</p>
           </div>
           <div className="card">
             <img src="/images/capsicum.jpg" alt="" />
             <h3>Organic Capsicum</h3>
             <p className='btn btn-success' onClick={redirectTo}> <FontAwesomeIcon icon={faShoppingCart} />   Add to Cart </p>
           </div>
         </section>
         </div>
       </>
    )
}
