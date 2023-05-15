import React, { useState } from "react";
import "../Reports/policyDetails.css";
import TabPage from "../../components/Tabs/TabPage";
import TabFooter from "../../components/Tabs/TabFooter";

function RefundPolicy() {
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


  const [policyStatus, setPolicyStatus] = useState("");
  const [canStatus, setCanStatus] = useState("");
  const [policyPremium, setPolicyPremium] = useState("");
  const [penaltyValue, setpenaltyValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Emirates ID: ${emiratesID}, Passport: ${passport}, First Name: ${firstName}, Last Name: ${lastName},DOB: ${DOB}, Number: ${number}, Gender:${gender}, MaritailStatus:${maritialStatus}, Nationality:${nationality}, Emirates:${emirates} Email: ${email}, ConfirmEmail:${confirmEmail}
      PolicySatus: ${policyStatus}, CancellationStatus: ${canStatus}, PolicyPremium: ${policyPremium}, penaltyValue: ${penaltyValue}`
    );
  };
  return (
    <>
      <section className="bg-form">
        <TabPage />
        <div className="policy_page">
          <div className="policy_h1">
            <h3> Cancel & Refund Policy </h3>
            <h6>Policy # 'pl_15fd96c6_d60'</h6>
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
              <div className="col-md-6">
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
              <div className="col-md-6">
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
                <label htmlFor="date">DOB</label>
                <input
                  type="date"
                  id="DOB"
                  name="DOB"
                  value={DOB}
                  onChange={(event) => setDob(event.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
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
            </div>

            <div className="row-style mb-3">
              <div className="col-md-6" >
                <label htmlFor="gender">Gender</label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="maritialStatus">Maritial Status</label>
                <input
                  type="text"
                  id="maritialStatus"
                  name="maritialStatus"
                  value={maritialStatus}
                  onChange={(event) => setMaritailStatus(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row-style mb-3">
              <div className="col-md-6" >
                <label htmlFor="nationality">Nationality</label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={nationality}
                  onChange={(event) => setNationality(event.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="emirates">Emirates</label>
                <input
                  type="text"
                  id="emirates"
                  name="emirates"
                  value={emirates}
                  onChange={(event) => setEmirates(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row-style mb-3">
              <div className="col-md-6" >
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
              <div className="col-md-6">
                <label htmlFor="email">Confirm Email</label>
                <input
                  type="email"
                  id="confirmEmail"
                  name="confirmEmail"
                  value={confirmEmail}
                  onChange={(event) => setConfirmEmail(event.target.value)}
                  required
                />
              </div>
            </div>
          </form>
        </div>

        <div className="policy_page">
          <div className="policy_info">Cancellation & Refund Details</div>
          <form onSubmit={handleSubmit} className="policy_form">
          <div className="row-style mb-3">
              <div className="col-md-6" >
                <label htmlFor="policystatus">Policy Status</label>
                <input
                  type="text"
                  id="policyStatus"
                  name="policyStatus"
                  value={policyStatus}
                  onChange={(event) => setPolicyStatus(event.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="canStatus">Cancellation Status</label>
                <input
                  type="text"
                  id="canStatus"
                  name="canStatus"
                  value={canStatus}
                  onChange={(event) => setCanStatus(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row-style mb-3">
              <div className="col-md-6" >
                <label htmlFor="policyPremium">Policy Premium</label>
                <input
                  type="text"
                  id="policyPremium"
                  name="policyPremium"
                  value={policyPremium}
                  onChange={(event) => setPolicyPremium(event.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="penaltyValue">Penality Value</label>
                <input
                  type="text"
                  id="penaltyValue"
                  name="penaltyValue"
                  value={penaltyValue}
                  onChange={(event) => setpenaltyValue(event.target.value)}
                  required
                />
              </div>
            </div>
          </form>
        </div>

        <TabFooter />
      </section>
    </>
  );
}

export default RefundPolicy;
