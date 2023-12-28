import { Button, Card, Col, Container, Row, Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img5.jpg";

export function Dashboard() {
  return (
    //hello this is my new comment i have added
    <Container>
      {/* <Header text="Welcome to Student CRUD APP"></Header> */}
      <style>
        {`
          body {
            background-color:#ffffff; 
          }
        `}
      </style>
      <p>Step into seamless transactions and effortless payments! </p>
      <Container className="middlebody">
        <Row>
          {
            <Carousel>
              <Carousel.Item interval={1000}>
                <img className="d-block w-100" src={img1} alt="Canada" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100 h-50"
                  src={img2}
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img3} alt="Third slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          }
        </Row>

        <Row className="justify-content-md-center mt-5">
          <Col lg={3}>
            <Card>
              {
                <Card.Img
                  variant="top"
                  src={img4}
                  className=""
                  style={{ height: "226px", width: "250px" }}
                  font-style="Rust"
                />
              }
              <Card.Body>
                <Card.Title>ELECTRICITY BILL</Card.Title>

                <LinkContainer to="/visa-registration">
                  <Button variant="primary" className="mt-3">
                    Pay Now
                  </Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card>
              {
                <Card.Img
                  variant="top"
                  src={img5}
                  style={{ height: "190px", width: "300px" }}
                />
              }
              {<hr typeof="rectangle" color="black"></hr>}
              <Card.Body>
                <Card.Title>MOBILE BILL</Card.Title>

                <LinkContainer to="/visa-registration">
                  <Button variant="primary" className="mt-3">
                    Pay Now
                  </Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
