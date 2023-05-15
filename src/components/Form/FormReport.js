import React from 'react';
import './form.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormReport() {
  return (
    <>
    <div className='body'>
        <div className='form-container'>
            <h1>Robert Jeck</h1>
            <p>Issued By: Dentalligence Admin</p>
            <Form className='text-form'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="policyId">
                    <Form.Label>Policy ID</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="dentistName">
                    <Form.Label>Dentist(Practice/Name)</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="issuedBy">
                    <Form.Label>Issued By</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="dentistEmail">
                    <Form.Label>Dentist Email</Form.Label>
                    <Form.Control type="email" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="emiratesId">
                    <Form.Label>Emirates ID</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="dob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="contactNum">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="number" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="patientAge">
                    <Form.Label>Patient Age</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="dateScreening">
                    <Form.Label>Date of Screening</Form.Label>
                    <Form.Control type="date" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="gender">
                    <Form.Label>Patient Gender</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="reportDate">
                    <Form.Label>Report Creation Date</Form.Label>
                    <Form.Control type="date" />
                    </Form.Group>
                </Row>
            </Form>
        </div>
    </div>
    </>
    )
}

export default FormReport