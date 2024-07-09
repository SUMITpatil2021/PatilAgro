import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col xs={12} md={10} lg={8} className="mx-auto">
          <div style={styles.aboutContainer}>
            <h2 style={styles.heading}>About Us</h2>
            <p style={styles.paragraph}>
              Welcome to <strong>Patil Agro</strong>, your trusted partner in bringing farm-fresh vegetables right to your doorstep. Founded with a passion for sustainable agriculture and a commitment to delivering the highest quality produce, Patil Agro stands as a beacon of excellence in the online vegetable shopping industry.
            </p>
            <p style={styles.paragraph}>
              At Patil Agro, we believe that everyone deserves access to fresh, healthy, and delicious vegetables. Our journey began with the vision of bridging the gap between farmers and consumers, ensuring that the produce you receive is not only fresh but also cultivated using eco-friendly practices.
            </p>
            <h3 style={styles.subHeading}>Our Mission</h3>
            <p style={styles.paragraph}>
              Our mission is to provide our customers with the freshest vegetables, sourced directly from our network of local farmers. We are dedicated to promoting sustainable farming practices, supporting local communities, and ensuring that our customers receive the best nature has to offer.
            </p>
            <h3 style={styles.subHeading}>Quality You Can Trust</h3>
            <p style={styles.paragraph}>
              We take pride in the quality of our produce. Each vegetable is carefully selected, hand-picked, and packed with the utmost care to preserve its freshness and nutritional value. Our stringent quality control processes ensure that you receive only the finest vegetables, free from harmful chemicals and pesticides.
            </p>
            <h3 style={styles.subHeading}>Why Choose Patil Agro?</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}><strong>Farm-Fresh Quality:</strong> We source our vegetables directly from trusted farmers who share our commitment to quality and sustainability.</li>
              <li style={styles.listItem}><strong>Convenience:</strong> Shop from the comfort of your home and have your vegetables delivered right to your doorstep.</li>
              <li style={styles.listItem}><strong>Sustainability:</strong> We support eco-friendly farming practices that protect the environment and promote biodiversity.</li>
              <li style={styles.listItem}><strong>Community Support:</strong> By choosing Patil Agro, you are supporting local farmers and contributing to the growth of your community.</li>
            </ul>
            <h3 style={styles.subHeading}>Our Commitment</h3>
            <p style={styles.paragraph}>
              At Patil Agro, customer satisfaction is our top priority. We are committed to providing you with an exceptional shopping experience, from easy online ordering to timely delivery. Our team is always here to assist you with any queries and to ensure that your shopping experience is smooth and enjoyable.
            </p>
            <p style={styles.paragraph}>
              Thank you for choosing Patil Agro. We look forward to serving you and being a part of your journey towards a healthier lifestyle.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  aboutContainer: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#343a40',
    marginBottom: '20px',
    textAlign: 'center',
  },
  subHeading: {
    color: '#495057',
    marginTop: '20px',
    marginBottom: '10px',
  },
  paragraph: {
    color: '#6c757d',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  list: {
    color: '#6c757d',
    lineHeight: '1.6',
    paddingLeft: '20px',
  },
  listItem: {
    marginBottom: '10px',
  },
};

export default AboutUs;
