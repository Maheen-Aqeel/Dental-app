import React, { useState } from "react";
import "../Reports/policyDetails.css";
import TabPage from "../../components/Tabs/TabPage";
import TabFooter from "../../components/Tabs/TabFooter";

function GenerateReport() {
  const [formDate, setFormDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [policyStatus, setPolicyStatus] = useState("");
  const [planType, setplanType] = useState("");
  const [paymentMode, setPaymentMode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Form Date: ${formDate}, To Date: ${toDate}, Policy Status: ${policyStatus}, Plan Type: ${planType}, Payment Mode: ${paymentMode}`
    );
  };
  return (
    <>
      <section className="bg-form">
        <TabPage />
        <div className="policy_page">
          <div className="policy_heading">
            <h3><b> Generate Policy Report </b></h3>
          </div>
          <div className="policy_info">Policy Holder Information</div>
          <form onSubmit={handleSubmit} className="policy_form">
          <div className="row-style mb-3">
              <div className="col-md-6">
                <label htmlFor="formDate">Form Date</label>
                <input
                  type="date"
                  id="formDate"
                  name="formDate"
                  value={formDate}
                  onChange={(event) => setFormDate(event.target.value)}
                  required
                />
              </div>
              <div className="col-md-6" >
                <label htmlFor="toDate">To Date</label>
                <input
                  type="date"
                  id="toDate"
                  name="toDate"
                  value={toDate}
                  onChange={(event) => setToDate(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row-style mb-3">
              <div className="col-md-6">
                <label htmlFor="policyStatus">Policy Staus</label>
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
                <label htmlFor="planType">Plan Type</label>
                <input
                  type="text"
                  id="planType"
                  name="planType"
                  value={planType}
                  onChange={(event) => setplanType(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row-style mb-3">
              <div className="col-md-12">
                    <label htmlFor="paymentMode">Payment Mode</label>
                    <input
                    type="text"
                    id="paymentMode"
                    name="paymentMode"
                    value={paymentMode}
                    onChange={(event) => setPaymentMode(event.target.value)}
                    required
                    />
                </div>
            </div>
            <button className="update_btn btn btn-primary">Update Customer</button>
          </form>
        </div>

        <TabFooter />
      </section>
    </>
  );
}

export default GenerateReport;
