import React from "react";
import './homepage.css'
import { useNavigate } from "react-router-dom";
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
    <h2>Welcome to Patil AgroMart <FontAwesomeIcon icon={faShoppingCart} /></h2>
    <p>
      At Patil AgroMart, we provide fresh and organic agro products straight from our farms to your table.
      Our commitment to quality ensures you enjoy the best of nature, sustainably grown and harvested with care.
    </p>
  </div>
</div>


          <div className='container mt-5'>
            <div className='row'>
              <div className='col'>
                <h3 className="section-title">Our Fresh and Organic Products</h3>
              </div>
            </div>
            <div className='row'>
              <div className="col-sm-6 col-md-3 mb-4">
                <div className="card">
                  <img src="/images/banana.jpg" alt="Banana" className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">Banana</h3>
                    <p className="btn btn-success" onClick={redirectTo}>
                      <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mb-4">
                <div className="card">
                  <img src="/images/watermelon.jpg" alt="Fresh Watermelon" className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">Fresh Watermelon</h3>
                    <p className="btn btn-success" onClick={redirectTo}>
                      <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mb-4">
                <div className="card">
                  <img src="/images/flower.jpg" alt="Cauliflower" className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">Cauliflower</h3>
                    <p className="btn btn-success" onClick={redirectTo}>
                      <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mb-4">
                <div className="card">
                  <img src="/images/capsicum.jpg" alt="Organic Capsicum" className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">Organic Capsicum</h3>
                    <p className="btn btn-success" onClick={redirectTo}>
                      <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}
