import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { fetchPersonByAdhar, savePerson, updatePerson, updatePersonByAdhar } from "../services/PersonService";
import { useParams } from "react-router-dom";

export function EditForm(){
    const params = useParams();
    const [isSubmitted, setIsSubmitted]= useState(false);
    const [formData, setFormData] = useState({adhar: "", fname: "",lname: "", fathername: "", age: "", gender: "", mob: "", email: "", pass: "", city: "", country: "", state: "", pin: "" });
    const [person,setPerson]=useState(false)

    const handleChange =(e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault({adhar: "", fname: "",lname: "", fathername: "", age: "", gender: "", mob: "", email: "", pass: "", city: "", country: "", state: "", pin: "" });
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
        {/* <Header text="Update person here"></Header> */}
        <style>
        {`
          body {
            background-color: #FFFFF0; 
          }
        `}
      </style>
      <h2 style={{ marginTop: "10px" , textAlign:"center", color:"#265073"}}>You can edit your form here</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident voluptatem necessitatibus sit obcaecati enim repellendus maxime eius facere fugiat natus, itaque dignissimos, cumque at id dicta, nobis aspernatur magni nostrum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero nulla velit itaque hic alias. Nisi illum sapiente minima molestiae mollitia debitis repellat enim similique ea. Sint sapiente commodi blanditiis debitis!</p>
      <hr />
        {formData?<Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Adhar Number</Form.Label>
                <Form.Control type="text" value={formData.adhar} placeholder="Enter Adhar Number" onChange={handleChange} name="adhar" disabled readOnly/>
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={formData.fname} placeholder="Enter First Name" onChange={handleChange} name="fname"/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={formData.lname} placeholder="Enter last Name" onChange={handleChange} name="lname"/>
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Father Name</Form.Label>
                <Form.Control type="text" value={formData.fathername} placeholder="Enter Father Name" onChange={handleChange} name="fathername"/>
              </Form.Group>
            </Col>
          </Row>
           <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" value={formData.age} placeholder="Enter Age" onChange={handleChange} name="age"/>
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" value={formData.mob} placeholder="Enter Mobile No." onChange={handleChange} name="mob"/>
              </Form.Group>
            </Col>
          </Row>
             <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={formData.email} placeholder="Enter Email" onChange={handleChange} name="email"/>
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" value={formData.city} placeholder="Enter City" onChange={handleChange} name="city"/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" value={formData.country} placeholder="Enter Country" onChange={handleChange} name="country"/>
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value="male"
                onChange={handleChange}
                checked = {formData.gender === "male"? true:false}
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="female"
                onChange={handleChange}
                checked = {formData.gender === "female"? true:false}
              />
            </Col>
          </Row>
           <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" value={formData.state} placeholder="Enter State" onChange={handleChange} name="state"/>
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Pin</Form.Label>
                <Form.Control type="text" value={formData.pin} placeholder="Enter Pin" onChange={handleChange} name="pin"/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
                <Button variant="primary" type="submit">Update</Button>
            </Col>
           
          </Row>
        </Form> : <p>No person found</p>}
        
        <Row className="mt-5">
            <Col lg={4}>
                {isSubmitted? <Alert>Person Updated</Alert>:null}
            </Col>
        </Row>
      </Container>
    );
}