import { Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { deletePerson, fetchPersons } from "../services/PersonService";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export function ApplicantsList(){
    const [persons,setPersons] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedAdhar, setSeletctedAdhar] = useState()
    const navigate = useNavigate()

    const openModalDialog = () => 
    {
      setShowDialog(true);
    }

    const closeModalDialog = () => {
        setShowDialog(false);
    }

    async function populatePersonState(){
        try {
            const data = await fetchPersons();
            setPersons(data.persons);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populatePersonState();
    },[]);

    const handlePersonDelete = async(roll) => {
        try {
            await deletePerson(selectedAdhar);
            await populatePersonState();
            closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    }
    const handleEditClick = () => { 
  }

    return (
      <Container>
        {/* <Header text="List of all persons"></Header> */}
        <style>
        {`
          body {
            background-color: #FFFFF0; 
          }
        `}
      </style>
      <h3 style={{ marginTop: "10px" }}></h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero nulla velit itaque hic alias. Nisi illum sapiente minima molestiae mollitia debitis repellat enim similique ea. Sint sapiente commodi blanditiis debitis!</p>
      <hr />
        {persons.length !== 0 ? <Table striped bordered className="mt-4" hover>
          <thead>
            <tr>
              <th className="text-center">Adhar No.</th>
              <th className="text-center">First Name</th>
              <th className="text-center">Last Name</th>
              <th className="text-center">Age</th>
              <th className="text-center">Gender</th>
              <th className="text-center">Mob</th>
              <th className="text-center">Email</th>
              <th className="text-center">City</th>
              <th className="text-center">Country</th>
              <th className="text-center">State</th>
              {/* <th>Pin</th> */}
              <th className="text-center">Options</th>      
            </tr>
          </thead>
          <tbody>
            {
                persons.map((person)=>{
                    return(
                        <tr>
                            <td>{person.adhar}</td>
                            <td>{person.fname}</td>
                            <td>{person.lname}</td>
                            <td>{person.age}</td>
                            <td>{person.gender}</td>
                            <td>{person.mob}</td>
                            <td>{person.email}</td>
                            <td>{person.city}</td>
                            <td>{person.country}</td> 
                            <td>{person.state}</td>
                            {/* <td>{person.pin}</td> */}
                        
                            <td>
                              {/* <Button variant="danger" onClick = { () => {
                                openModalDialog();
                                setSeletctedAdhar(person.adhar)
                                  }} className="mr-3">Delete</Button> &nbsp; &nbsp; */}

                                <Button variant="primary" onClick={ () => {
                                    console.log(person.adhar);
                                    navigate(`/process/${person.adhar}`)
                                }
                            }>Process</Button> &ensp;

                            <Button variant="primary" onClick={ () => {
                                    console.log(person.adhar);
                                    navigate(`/edit/${person.adhar}`)
                                }
                            }>Edit</Button>
                            </td>
                        </tr>
                    )
                })
            }
          </tbody>
        </Table> : <p>No Person in the list</p>}
        
        <Modal show={showDialog} onHide={closeModalDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Conformaition msg to delet</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete with {selectedAdhar}!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() =>{
            handlePersonDelete()
          }}>
            Yes
          </Button>
          <Button variant="primary" onClick={closeModalDialog}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
      
      <Row className="justify-content-center mt-3">
      <Col xs="auto">
      <LinkContainer to={"/"}>
      <Button variant="danger">Back To Home</Button>
      </LinkContainer>
      </Col>
      </Row>


      </Container>
    );
}