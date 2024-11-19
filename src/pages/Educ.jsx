import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Educ = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{
        backgroundColor: '#f9f9f9',
        color: '#333',
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif", // Clean, modern font
      }}
    >
      <h2 className="mb-5" style={{ fontWeight: 'bold', color: '#28a745' }}>
        Educational Background
      </h2>

      {/* College */}
      <Container
        className="mb-5 p-4"
        style={{
          backgroundColor: 'rgba(40, 167, 69, 0.1)',
          border: '2px solid rgba(40, 167, 69, 0.5)',
          borderRadius: '15px',
        }}
      >
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="collegelog.jpg" // Replace with actual logo URL
                style={{ height: '150px', objectFit: 'contain' }}
                alt="College Logo"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Naga College Foundation Inc.</Card.Title>
                <Card.Text>
                  Bachelor of Science in Computer Science <br />
                  <small style={{ color: '#555' }}>2020 - Present</small>
                </Card.Text>
                <Card.Text className="mt-3" style={{ fontSize: '0.95rem', color: '#555' }}>
                  Specialized in software development, data structures, and web technologies, 
                  completing a capstone project on scalable web applications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* High School */}
      <Container
        className="mb-5 p-4"
        style={{
          backgroundColor: 'rgba(40, 167, 69, 0.1)',
          border: '2px solid rgba(40, 167, 69, 0.5)',
          borderRadius: '15px',
        }}
      >
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="hslog.jpg" // Replace with actual logo URL
                style={{ height: '150px', objectFit: 'contain' }}
                alt="High School Logo"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Camarines Sur National High School</Card.Title>
                <Card.Text>
                  High School Diploma <br />
                  <small style={{ color: '#555' }}>2015 - 2019</small>
                </Card.Text>
                <Card.Text className="mt-3" style={{ fontSize: '0.95rem', color: '#555' }}>
                  Participated in coding and robotics competitions while excelling in mathematics and STEM subjects.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Elementary */}
      <Container
        className="mb-5 p-4"
        style={{
          backgroundColor: 'rgba(40, 167, 69, 0.1)',
          border: '2px solid rgba(40, 167, 69, 0.5)',
          borderRadius: '15px',
        }}
      >
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="elemlog.png" // Replace with actual logo URL
                style={{ height: '150px', objectFit: 'contain' }}
                alt="Elementary School Logo"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Dr. Domingo G. Abcede Elementary School</Card.Title>
                <Card.Text>
                  Elementary Diploma <br />
                  <small style={{ color: '#555' }}>2009 - 2015</small>
                </Card.Text>
                <Card.Text className="mt-3" style={{ fontSize: '0.95rem', color: '#555' }}>
                  Built a strong foundation in academics, developing an early passion for technology and problem-solving.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Summary */}
      <Container
        className="mt-5 p-4"
        style={{
          backgroundColor: 'rgba(40, 167, 69, 0.1)',
          border: '2px solid rgba(40, 167, 69, 0.5)',
          borderRadius: '15px',
        }}
      >
        <h4 style={{ fontWeight: 'bold' }}>Summary</h4>
        <p style={{ fontSize: '1rem', color: '#555' }}>
          My educational journey reflects a passion for continuous learning and personal growth. 
          From building strong academic foundations in elementary school to specializing in 
          computer science in college, I’ve gained valuable skills and knowledge to pursue a 
          successful career in technology.
        </p>
      </Container>
    </Container>
  );
};

export default Educ;
