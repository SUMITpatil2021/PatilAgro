import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Get in Touch</h4>
          <p>We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to provide feedback, we're here to help.</p>
          <ul className="list-unstyled">
            <li><strong>Address:</strong> 123 Green Valley, Farm Lane, Agriculture City, Country</li>
            <li><strong>Phone:</strong> +123 456 7890</li>
            <li><strong>Email:</strong> contact@patilagro.com</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h4>Send Us a Message</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Subject" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
