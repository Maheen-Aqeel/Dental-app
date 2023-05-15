import Button from 'react-bootstrap/Button';
import React, {useState}from "react";
import TabPage from "../../components/Tabs/TabPage";
import "./issuePolicy.css";
import TabFooter from '../../components/Tabs/TabFooter';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function IssuePolicy() {
    const [emiratesID, setEmiratesID] = useState("");
    const [passport, setPassport] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [DOB, setDob] = useState("");
    const [number, setNumber] = useState("");
    const [gender, setGender] = useState("");
    const [maritialStatus, setMaritailStatus] = useState("");
    const [nationality, setNationality] = useState("");
    const [emirates, setEmirates] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Emirates ID: ${emiratesID}, Passport: ${passport}, First Name: ${firstName}, Last Name: ${lastName},DOB: ${DOB}, Number: ${number}, Gender:${gender}, MaritailStatus:${maritialStatus}, Nationality:${nationality}, Emirates:${emirates} Email: ${email}, ConfirmEmail:${confirmEmail}`
    );
  };

  return (
    <>
    <section className='bg-form'>
      <TabPage />
      <section class="issue-section">

    <div class="issuepolicy-div">
        <div class="div-1">
            <h5>Issue New Policy</h5>
        </div>
        <div class="div-2">
                <h6>Single Policy</h6>
            </div>
        <div class="div-3">
            <h6>Bulk Upload</h6>
        </div>
    </div>
    
        <div>
            <div className='issue_heading'>
            <h3><b> Policy Holder Information</b></h3>
            </div>
            <Form onSubmit={handleSubmit} className="issue_form">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="emirateId">
                    <Form.Label>Emirates ID</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="passport">
                    <Form.Label>Passport</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="fname">
                    <Form.Label>Member First Name</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="lname">
                    <Form.Label>Member Last Name</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="dob">
                    <Form.Label>DOB</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="number">
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="number" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="maritialStatus">
                    <Form.Label>Martitial Status</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="nationality">
                    <Form.Label>Nationality</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="emirates">
                    <Form.Label>Emirates</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="email">
                    <Form.Label>Member Email</Form.Label>
                    <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="confirmEmail">
                    <Form.Label>Confirm Email</Form.Label>
                    <Form.Control type="email" />
                    </Form.Group>
                </Row>

            </Form>

            <div className='issue_heading'>
            <h3><b> Policy Holder Information</b></h3>
            </div>
            <Form onSubmit={handleSubmit} className="issue_form">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="planType">
                    <Form.Label>Plan Type & Fees to be collected</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="paymnetMode">
                    <Form.Label>Payment Mode</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>
                </Row>
                
                    {/* <div className="checkbox-container">
                        <label>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        I hereby confirm that I have got the details for the Policy Holder correct 
                        to the best of my ability and ensured this is valid information for a real Member.
                        </label>
                    </div> */}
                    
                

                <button className='issue-policybtn btn btn-primary'>Submit</button>

            </Form>
        
        </div>
        
      </section>
      <TabFooter/>
    </section> 
    </>
  );
}

export default IssuePolicy;
