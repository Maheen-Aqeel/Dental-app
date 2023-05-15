import React, { useState } from "react";
import "./uploadFile.css";
import TabPage from "../../components/Tabs/TabPage";
import TabFooter from "../../components/Tabs/TabFooter";
import { Container } from "@mui/material";

function UploadFile() {
  const [row, setRow] = useState("");
  const [memberType, setMemberType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [emirateId, setEmirateId] = useState("");
  const [passport, setPassport] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [maritialStatus, setMaritailStatus] = useState("");
  const [nationality, setNationality] = useState("");
  const [emirate, setEmirate] = useState("");
  const [planCode, setPlanCode] = useState("");
  const [planPremium, setPlanPermium] = useState("");

  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Passport: ${passport}, First Name: ${firstName}, Last Name: ${lastName}, DOB: ${dob}, Gender:${gender}, MaritailStatus:${maritialStatus}, Nationality:${nationality}, Email: ${email}, PlanCode:${planCode}, planPremiumValue: ${planPremium}
      emirate: ${emirate}, employeeId: ${employeeId}, MemberType: ${memberType}, row: ${row}, Phone: ${phone}`
    );
  };
  return (
    <>
      <section className="bg-form">
        <TabPage />
        <div className="policy_page">

          <div className="policy_heading">
            <h3><b> Upload Bulk File </b></h3>
            <input type="file" name="file" onChange={changeHandler} />
          </div>

        <Container className="container_box">
            <form>
            <div class="form-row">
              <label for="row">Row #</label>
              <input type="text" id="row" name="row" required />
            </div>
            <div class="form-row">
                <label for="membertype">Member Type</label>
                <input type="text" id="membertype" name="membertype" required />
            </div>
            <div class="form-row">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname" required />
            </div>
            <div class="form-row">
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lname" required />
            </div>
            <div class="form-row">
                <label for="dob">DOB</label>
                <input type="text" id="dob" name="dob" required />
            </div>
            <div class="form-row">
                <label for="empId">Employee ID</label>
                <input type="text" id="empId" name="empId" required />
            </div>
            <div class="form-row">
                <label for="emirateId">Emirates ID</label>
                <input type="text" id="emirateId" name="emirateId" required />
            </div>
            <div class="form-row">
                <label for="passportNum">Passport #</label>
                <input type="text" id="passportNum" name="passportNum" required />
            </div>
            <div class="form-row">
                <label for="phone">Phone #</label>
                <input type="text" id="phone" name="phone" required />
            </div>
            <div class="form-row">
                <label for="email">Email</label>
                <input type="text" id="email" name="email" required />
            </div>
            <div class="form-row">
                <label for="gender">Gender</label>
                <input type="text" id="gender" name="gender" required />
            </div>
            <div class="form-row">
                <label for="nationality">Nationality</label>
                <input type="text" id="nationality" name="nationality" required />
            </div>
            <div class="form-row">
                <label for="maritialStatus">Maritial Status</label>
                <input type="text" id="maritialStatus" name="maritialStatus" required />
            </div>
            <div class="form-row">
                <label for="emirate">Emirates</label>
                <input type="text" id="emirate" name="emirate" required />
            </div>
            <div class="form-row">
                <label for="palnCode">Plan Code</label>
                <input type="text" id="planCode" name="planCode" required />
            </div>
            <div class="form-row">
                <label for="planPremium">Plan Premium Vlaue (AED)</label>
                <input type="text" id="planPremium" name="planPremium" required />
            </div>

                

            </form>
        </Container>
        </div>

        <TabFooter />
      </section>
    </>
  );
}

export default UploadFile;
