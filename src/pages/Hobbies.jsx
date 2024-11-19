import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Hobbies = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{
        backgroundColor: '#f0f8ff', // Soft light blue background for vibrancy
        color: '#333',
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <h2
        className="mb-5"
        style={{
          fontWeight: 'bold',
          color: '#28a745', // Vibrant green for headings
          fontSize: '2.5rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        My Hobbies
      </h2>

      <Row className="mb-5">
        {/* Hobby 1 */}
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow" style={{ borderRadius: '15px', backgroundColor: '#ffffff' }}>
            <Card.Img
              variant="top"
              src="phot.jpeg" // Replace with the actual image URL
              style={{ height: '200px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }}
              alt="Hobby 1"
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#28a745' }}>Photography</Card.Title>
              <Card.Text style={{ fontSize: '1rem', color: '#555' }}>
                Capturing moments and the beauty of nature through the lens is one of my favorite pastimes. It helps me express creativity and see the world differently.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Hobby 2 */}
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow" style={{ borderRadius: '15px', backgroundColor: '#ffffff' }}>
            <Card.Img
              variant="top"
              src="gym.jpeg" // Replace with the actual image URL
              style={{ height: '200px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }}
              alt="Hobby 2"
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#28a745' }}>Gym</Card.Title>
              <Card.Text style={{ fontSize: '1rem', color: '#555' }}>
                I love going to the gym to improve my strength and have a healthy lifestyle.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Hobby 3 */}
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow" style={{ borderRadius: '15px', backgroundColor: '#ffffff' }}>
            <Card.Img
              variant="top"
              src="cook.jpg" // Replace with the actual image URL
              style={{ height: '200px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }}
              alt="Hobby 3"
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#28a745' }}>Cooking</Card.Title>
              <Card.Text style={{ fontSize: '1rem', color: '#555' }}>
                Experimenting with flavors and creating delicious meals allows me to unwind and share happiness with friends and family.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Hobby 4 */}
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow" style={{ borderRadius: '15px', backgroundColor: '#ffffff' }}>
            <Card.Img
              variant="top"
              src="vg.jpg" // Replace with the actual image URL
              style={{ height: '200px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }}
              alt="Hobby 4"
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#28a745' }}>Gaming</Card.Title>
              <Card.Text style={{ fontSize: '1rem', color: '#555' }}>
                Video games provide me with an exciting escape into immersive worlds, challenging my problem-solving skills and strategy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Add a Footer or Closing Message */}
      <Container
        className="text-center mt-5"
        style={{
          backgroundColor: '#28a745', // Green background for footer-like section
          color: '#fff',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <p style={{ fontSize: '1rem' }}>
          These hobbies not only provide me with joy and relaxation, but they also enhance my creativity, focus, and problem-solving abilities.
        </p>
      </Container>
    </Container>
  );
};

export default Hobbies;
