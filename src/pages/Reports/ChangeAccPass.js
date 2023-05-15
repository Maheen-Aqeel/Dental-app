import React, { useState } from "react";
import "./changeAccPass.css";
import TabPage from "../../components/Tabs/TabPage";
import TabFooter from "../../components/Tabs/TabFooter";

function ChangeAccPass() {
  const [passport, setPassport] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Passport: ${passport}`
    );
  };
  return (
    <>
      <section className="bg-form">
        <TabPage />
        <div className="policy_page">
          <div className="policy_heading">
            <h3> Change Account Password </h3>
          </div>
          <div className="policy_info">Account Password Information</div>
          <form onSubmit={handleSubmit} className="policy_form">
              <div className="col-md-12">
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
            <button className="update_btn btn btn-primary">Change Password</button>
          </form>
        </div>

        <TabFooter />
      </section>
    </>
  );
}

export default ChangeAccPass;
