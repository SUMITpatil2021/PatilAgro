import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mt-5 mb-5 p-4" style={styles.contactContainer}>
      <h2 className="text-center mb-4" style={styles.heading}>Contact Us</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h4 style={styles.subHeading}>Get in Touch</h4>
          <p style={styles.paragraph}>
            We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to provide feedback, we're here to help.
          </p>
          <ul className="list-unstyled" style={styles.list}>
            <li style={styles.listItem}><strong>Address:</strong> Patil AgroMart Kolhapur  </li>
            <li style={styles.listItem}><strong>Phone:</strong> +123 456 7890</li>
            <li style={styles.listItem}><strong>Email:</strong> contact@patilagro.com</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h4 style={styles.subHeading}>Send Us a Message</h4>
          <form>
  <div className="mb-3">
    <label htmlFor="name" className="form-label" style={styles.label}>Name</label>
    <input type="text" className="form-control" id="name" placeholder="Your Name" style={styles.input} />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label" style={styles.label}>Email</label>
    <input type="email" className="form-control" id="email" placeholder="Your Email" style={styles.input} />
  </div>
  <div className="mb-3">
    <label htmlFor="subject" className="form-label" style={styles.label}>Subject</label>
    <input type="text" className="form-control" id="subject" placeholder="Subject" style={styles.input} />
  </div>
  <div className="mb-3">
    <label htmlFor="message" className="form-label"  style={styles.label}>Message</label>
    <textarea className="form-control" id="message" rows="4" placeholder="Your Message" style={styles.textarea}></textarea>
  </div>
  <button type="submit" className="btn btn-primary" style={styles.button}>Submit</button>
</form>

        </div>
      </div>
    </div>
  );
};

const styles = {
  contactContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#343a40',
  },
  subHeading: {
    color: '#495057',
    marginBottom: '15px',
  },
  paragraph: {
    color: '#6c757d',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  list: {
    paddingLeft: '0',
  },
  listItem: {
    marginBottom: '10px',
    color: '#6c757d',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#495057',
    marginRight:'100%'
  },
  input: {
    borderRadius: '5px',
    borderColor: '#ced4da',
  },
  textarea: {
    borderRadius: '5px',
    borderColor: '#ced4da',
  },
  button: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    borderRadius: '5px',
  },
};

export default ContactUs;
