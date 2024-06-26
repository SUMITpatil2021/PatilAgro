import React from "react";
import './homepage.css'
import { Navigate,Link ,useNavigate, Routes} from "react-router-dom";
import UserLogin from "./userlogin";

export default function Home(){
    const navigate = useNavigate();
   
    const redirectTo = () => {
        navigate('/login');
    };
    return(
        <>
        <div className='row'>
         <section className="cards col">
           <div className="card">
             <img src="/images/banana.jpg" alt="" />
             <h3>Banana</h3>
             <p className='btn btn-success' onClick={redirectTo}> Add to Cart </p>
           </div>
           <div className="card col">
             <img src="/images/watermelon.jpg" alt="" />
             <h3>Fresh Watermelon</h3>
             <p className='btn btn-success'>Add to Cart</p>
           </div>
           <div className="card col">
             <img src="/images/flower.jpg" alt="" />
             <h3>Cauliflower</h3>
             <p className='btn btn-success'>Add to Cart</p>
           </div>
         </section>
         </div>
       </>
    )
}
