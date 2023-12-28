import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { savePerson } from "../services/PersonService";

export function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    adhar: "", fname: "", lname: "", fathername: "", age: "", gender: "", mob: "", email: "", pass: "", city: "", country: "", state: "", pin: "", status:"new"});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault({adhar: "", fname: "",lname: "", fathername: "", age: "", gender: "", mob: "", email: "", pass: "", city: "", country: "", state: "", pin: "", status:"hold"});
    const checkbox = document.getElementById("formBasicCheckbox");
  if (!checkbox.checked) {
    //not working check again
    alert("Please confirm acceptance of guidelines.");
    return;
  }
    try {
      console.log(formData);
      const result = await savePerson(formData);
      setFormData({});
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
      console.log(result.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitForm = async () => {
    try {
      const result = await savePerson(formData);
      setFormData({});
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
      console.log(result.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalConfirm = () => {
    handleSubmitForm(); 
    handleClose();
  };

  return (
    <Container className="container">
      <style>
        {`
          body {
            background-color: #ffffff; 
          }
        `}
      </style>
      <h2 style={{ marginTop: "10px" , textAlign:"center", color:"#265073"}}>Please fill in all the  details to Register</h2>
     
      <hr />
      {/* <Header text="Register Applicant Here"></Header> */}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={isSubmitted ? formData.fname : null}
                placeholder="Enter Name"
                onKeyUp={handleChange}
                name="fname"
              />
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Father Name</Form.Label>
              <Form.Control
                type="text"
                value={isSubmitted ? formData.fathername : null}
                placeholder="Enter Father Name"
                onKeyUp={handleChange}
                name="fathername"
              />
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Last Name </Form.Label>
              <Form.Control
                type="text"
                value={isSubmitted ? formData.lname : null}
                placeholder="Enter Last Name"
                onKeyUp={handleChange}
                name="lname"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Aadhaar No</Form.Label>
              <Form.Control
                type="text"
                value={isSubmitted ? formData.adhar : null}
                placeholder="Enter Aadhaar No"
                onKeyUp={handleChange}
                name="adhar"
              />
            </Form.Group>
          </Col>

          <Col lg={2}>
            <Form.Label>Enter Your Gender</Form.Label>
            <Form.Check
              type="radio"
              label="Male"
              name="gender"
              value="male"
              onChange={handleChange}
            />
          </Col>
          <Col lg={2}>
            <Form.Label>&nbsp;</Form.Label>
            <Form.Check
              type="radio"
              label="Female"
              name="gender"
              value="female"
              onChange={handleChange}
            />
          </Col>
          <Col lg={4}>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              value={isSubmitted ? formData.age : null}
              placeholder="Enter Age "
              onKeyUp={handleChange}
              name="age"
            />
          </Col>
        </Row>

        <Row>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="text"
                  value={isSubmitted ? formData.email : null}
                  placeholder="Enter Email"
                  onKeyUp={handleChange}
                  name="email"
                />
              </Form.Group>
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Phone No </Form.Label>
              <Form.Control
                type="text"
                value={isSubmitted ? formData.mob : null}
                placeholder="Enter Phone No "
                onKeyUp={handleChange}
                name="mob"
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
        <Form.Group className="mb-3">
        <Form.Group className="mb-3">
                <Form.Label>Address  </Form.Label>
                <Form.Control type="text" value={isSubmitted?formData.marks:null} placeholder="Enter Address" onKeyUp={handleChange} name="pass"/>
              </Form.Group>
                </Form.Group>
        </Col>
        </Row>

        <Row>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label>City </Form.Label>
                <Form.Control
                  type="text"
                  value={isSubmitted ? formData.city : null}
                  placeholder="Enter City"
                  onKeyUp={handleChange}
                  name="city"
                />
              </Form.Group>
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>State </Form.Label>
              <Form.Control
                type="text"
                value={isSubmitted ? formData.state : null}
                placeholder="Enter State"
                onKeyUp={handleChange}
                name="state"
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label>Country </Form.Label>
                <Form.Control
                  type="text"
                  value={isSubmitted ? formData.country : null}
                  placeholder="Enter Country"
                  onKeyUp={handleChange}
                  name="country"
                  required
                />
              </Form.Group>
            </Form.Group>
          </Col>
        </Row>
        
              

          <Row className="justify-content-center mt-3">
              <Col xs="auto">
                <Button variant="success" onClick={handleShow} >
                  Register
                </Button>{" "}
              </Col>
            <Col xs="auto">
              <LinkContainer to="/">
                <Button variant="danger" onClick={handleShow}>
                  Back To Home
                </Button>
              </LinkContainer>
            </Col>
          </Row>

        {/* <Row className="mt-2">
          <Col lg={4}>
            {isSubmitted ? <Alert>Person Registered</Alert> : null}
          </Col>
        </Row> */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Do you want to submit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            We recommend checking all the details before you submit.
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Take me back
            </Button>
            <Button variant="primary" onClick={handleModalConfirm}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
        
      </Form>
    </Container>
  );
}
