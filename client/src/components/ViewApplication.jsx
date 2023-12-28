import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchPersonByAdhar, updatePerson } from "../services/PersonService";

export function ViewApplication(){
    const params = useParams();
    const [isSubmitted, setIsSubmitted]= useState(false);
    const [formData, setFormData] = useState({adhar: "", fname: "",lname: "", fathername: "", age: "", gender: "", mob: "", email: "", pass: "", city: "", country: "", state: "", pin: "", status:"" });
    const [person,setPerson]=useState(false)

    const handleChange =(e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleAccept = async(e) =>{
        e.preventDefault();
        try {
            
            const result = await updatePerson(formData,params.adhar);
            console.log(result)
        } catch (error) {
            console.log(error);
        }
    }

    const handleReject = async(e) =>{
      e.preventDefault();
      try {
          const result = await updatePerson(formData,params.adhar);
          console.log(result)
      } catch (error) {
          console.log(error);
      }
    }

    const handleHold = async(e) =>{
      e.preventDefault();
      try {
          const result = await updatePerson(formData,params.adhar);
          console.log(result)
      } catch (error) {
          console.log(error);
      }
    }

    const populatePersonState = async() => {
      try {
        const result = await fetchPersonByAdhar(params.adhar)
        setPerson(result.person)
        setFormData(result.person)
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
        populatePersonState();
    }, [])

    return (
      <Container>
        {/* <Header text="Update person here"></Header>*/}

        <style>
        {`
          body {
            background-color: #FFFFDD; 
          }
        `}
      </style>
      <h2 style={{ marginTop: "10px" }}>Please process the application here</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident voluptatem necessitatibus sit obcaecati enim repellendus maxime eius facere fugiat natus, itaque dignissimos, cumque at id dicta, nobis aspernatur magni nostrum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero nulla velit itaque hic alias. Nisi illum sapiente minima molestiae mollitia debitis repellat enim similique ea. Sint sapiente commodi blanditiis debitis!</p>
      <hr />
        {formData?<Form 
        // onSubmit={handleSubmit}
        >
          <Row>
            <Col md={{ span: 4, offset: 1 }}>
              <Form.Group className="mb-3">
                <Form.Label>Adhar Number</Form.Label>
                <Form.Control type="text" value={formData.adhar} placeholder="Enter Adhar Number" onChange={handleChange} name="adhar" disabled readOnly/>
              </Form.Group>
            </Col>
            <Col md={{ span: 4, offset: 1}}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={formData.fname} placeholder="Enter First Name" onChange={handleChange} name="fname" disabled readOnly/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 1 }}>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={formData.lname} placeholder="Enter last Name" onChange={handleChange} name="lname"disabled readOnly/>
              </Form.Group>
            </Col>
            <Col md={{ span: 4, offset: 1}}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Father Name</Form.Label>
                <Form.Control type="text" value={formData.fathername} placeholder="Enter Father Name" onChange={handleChange} name="fathername"disabled readOnly/>
              </Form.Group>
            </Col>
          </Row>
           <Row>
            <Col md={{ span: 4, offset: 1 }}>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" value={formData.age} placeholder="Enter Age" onChange={handleChange} name="age"disabled readOnly/>
              </Form.Group>
            </Col>
            <Col md={{ span: 4, offset: 1}}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" value={formData.mob} placeholder="Enter Mobile No." onChange={handleChange} name="mob"disabled readOnly/>
              </Form.Group>
            </Col>
          </Row>
             <Row>
            <Col md={{ span: 4, offset: 1 }}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={formData.email} placeholder="Enter Email" onChange={handleChange} name="email"disabled readOnly/>
              </Form.Group>
            </Col>
            <Col md={{ span: 4, offset: 1}}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" value={formData.city} placeholder="Enter City" onChange={handleChange} name="city"disabled readOnly/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 1 }}>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" value={formData.country} placeholder="Enter Country" onChange={handleChange} name="country"disabled readOnly/>
              </Form.Group>
            </Col>
            <Col md={{ span: 1, offset: 1}}>
            <Form.Label>Gender</Form.Label>
            <Row>
            <Col md={9}>
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value="male"
                onChange={handleChange}
                checked = {formData.gender === "male"? true:false}
                disabled readOnly
              />
              </Col>
              <Col md={1}>
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="female"
                onChange={handleChange}
                checked = {formData.gender === "female"? true:false}
                disabled readOnly
              />
            </Col>
            </Row>
            </Col>
          </Row>
           <Row>
            <Col md={{ span: 4, offset: 1 }}>
              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" value={formData.state} placeholder="Enter State" onChange={handleChange} name="state" disabled readOnly/>
              </Form.Group>
            </Col>
            <Col md={{ span: 4, offset: 1}}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Pin</Form.Label>
                <Form.Control type="text" value={formData.pin} placeholder="Enter Pin" onChange={handleChange} name="pin" disabled readOnly/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 3, offset: 2 }}>
                <Button variant="primary" onClick={handleAccept}>Accept Application</Button>
            </Col>
            <Col lg={3}>
                <Button variant="danger" onClick={handleReject}>Reject Application</Button>
            </Col>
            <Col lg={3}>
                <Button variant="secondary" onClick={handleHold}>On Hold</Button>
            </Col>
           
          </Row>
        </Form> : <p>No person found</p>}
        
        <Row className="mt-5">
            <Col lg={4}>
                {isSubmitted? <Alert>Person Registered</Alert>:null}
            </Col>
        </Row>

        
      </Container>
    );
}