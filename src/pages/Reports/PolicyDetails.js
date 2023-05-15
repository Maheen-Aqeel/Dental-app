import React, { useState } from "react";
import "./policyDetails.css";
import TabPage from "../../components/Tabs/TabPage";
import TabFooter from "../../components/Tabs/TabFooter";
import { Container } from "react-bootstrap";

function PolicyDetails() {
  const [emiratesID, setEmiratesID] = useState("");
  const [passport, setPassport] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [policyNum, setPolicyNum] = useState("");
  const [balPolicy, setBalPolicy] = useState("");
  const [activeDate, setActiveDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Emirates ID: ${emiratesID}, Passport: ${passport}, First Name: ${firstName}, Last Name: ${lastName}, Number: ${number}, Email: ${email}
      PolicyNumber: ${policyNum}, BalancePolicy: ${balPolicy}, ActivatedDate: ${activeDate}, ExpiryDate: ${expiryDate}`
      );
  };
  return (
    <>
      <section className="bg-form">
        <TabPage />
        <div className="policy_page">
          <div className="policy_h1">
            <h3> Policy Details </h3>
            <h6>Policy # 'pl_28c4a835_cfd'</h6>
          </div>
          <div className="policy_info">Policy Holder Information</div>
          <form onSubmit={handleSubmit} className="policy_form">
            <div className="row-style mb-3">
              <div className="col-md-6" >
                <label htmlFor="emiratesID">Emirates ID</label>
                <input
                  type="text"
                  id="emiratesID"
                  name="emiratesID"
                  value={emiratesID}
                  onChange={(event) => setEmiratesID(event.target.value)}
                  required
                />
              </div>
              <div className="col-md-6" >
                <label htmlFor="passport">Passport</label>
                <input
                  type="passport"
                  id="passport"
                  name="passport"
                  value={passport}
                  onChange={(event) => setPassport(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row-style mb-3">
              <div className="col-md-6" >
                <label htmlFor="firstName">Member First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </div>
              <div className="col-md-6" >
                <label htmlFor="lastName">Member Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row-style mb-3">
              <div className="col-md-6" >
                <label htmlFor="number">Number</label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email">Member Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
            </div>
          </form>
        </div>

        <div className="policy_page">
          <div className="policy_info">Policy Information</div>
          <form onSubmit={handleSubmit} className="policy_form">
            <div className="row-style mb-3">
              <div className="col-md-6">
                <label htmlFor="policyNum">Policy#</label>
                <input
                  type="text"
                  id="policyNum"
                  name="policyNum"
                  value={policyNum}
                  onChange={(event) => setPolicyNum(event.target.value)}
                  required
                />
              </div>
              <div className="col-md-6" >
                <label htmlFor="balPolicy">Balance left in Policy</label>
                <input
                  type="balPolicy"
                  id="balPolicy"
                  name="balPolicy"
                  value={balPolicy}
                  onChange={(event) => setBalPolicy(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row-style mb-3">
              <div className="col-md-6">
                <label htmlFor="activeDate">Activation Date</label>
                <input
                  type="date"
                  id="activeDate"
                  name="activeDate"
                  value={activeDate}
                  onChange={(event) => setActiveDate(event.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="date"
                  id="expiryDate"
                  name="expiryDate"
                  value={expiryDate}
                  onChange={(event) => setExpiryDate(event.target.value)}
                  required
                />
              </div>
            </div>
          </form>
        </div>

        <div className="policy_page">
          <div className="policy_info">Policy Documents</div>
          <Container className="policy_container">
            <div>
              <h4>View X-Ray</h4>
              <img alt="" src="images/viewXray.png"/>
            </div>

            <div>
            <h4>View Reports</h4>
              <img alt="" src="images/viewReport.png"/>
            </div>
          </Container>
        </div>

        <div className="policy_page">
          <div className="policy_info">Policy Actions</div>
            <button className="btn btn-outline-primary">Procedural Information</button>
        </div>

        <TabFooter />
      </section>
    </>
  );
}

export default PolicyDetails;
