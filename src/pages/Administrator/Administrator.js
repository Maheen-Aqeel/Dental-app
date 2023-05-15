import Button from 'react-bootstrap/Button';
import React from "react";
import TabPage from "../../components/Tabs/TabPage";
import "./administrator.css";
import TableList from "../../components/Table/TableList";
import TabFooter from '../../components/Tabs/TabFooter';

function Administrator() {
  return (
    <>
    <section className='bg-form'>
      <TabPage />
      <section class="policy-div">
        <div class="policy-form">
          <h1>Search Policy.</h1>
          <form>
            <div className="input-block">
              <label htmlFor="emId" className="input-label">
                Empirates ID
              </label>
              <br />
              <input
                type="EmId"
                autoComplete="off"
                name="EmId"
                id="EmId"
                placeholder="Emirates ID"
              />
            </div>
            <div className="input-block">
              <label htmlFor="policyNum" className="input-label">
                Policy Number
              </label>
              <br />
              <input
                type="policyNum"
                autoComplete="off"
                name="policyNum"
                id="policyNum"
                placeholder="Policy Num"
              />
            </div>
            <div className="input-block">
              <label htmlFor="fname" className="input-label">
                First Name
              </label>
              <br />
              <input
                type="fname"
                autoComplete="off"
                name="fname"
                id="fname"
                placeholder="First Name"
              />
            </div>
            <div className="input-block">
              <label htmlFor="lname" className="input-label">
                Last Name
              </label>
              <br />
              <input
                type="lname"
                autoComplete="off"
                name="lname"
                id="lname"
                placeholder="Last Name"
              />
            </div>
            <Button variant="primary" className="search-btn">Search</Button>
          </form>
        </div>
        <div class="policy-img">
          <img alt="" src="images/tooth.png" />
        </div>
      </section>
      <section className="table-list">
        <TableList/>
      </section>
      <TabFooter/>
    </section>
    </>
  );
}

export default Administrator;
