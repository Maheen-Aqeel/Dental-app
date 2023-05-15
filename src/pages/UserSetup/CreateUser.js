import React, { useState } from "react";
import "./createUser.css";
import TabPage from "../../components/Tabs/TabPage";
import TabFooter from "../../components/Tabs/TabFooter";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Username: ${username}, Email: ${email}, Password: ${password}`
    );
  };
  return (
    <>
    <section className="bg-form">
      <TabPage />
      <div className="User_page">
            <div className="user_h1">
                <h3> Create New User </h3>
            </div>
            <div className="user_info">
                User Information
            </div>
            <form onSubmit={handleSubmit} className="user_form">
            

            <label
                htmlFor="username"
            >
                User Name:
            </label>
            <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                style={{
                padding: "5px",
                margin: "5px 0",
                width: "100%",
                borderRadius: "3px",
                border: "1px solid #ccc",
                }}
            />

            <label
                htmlFor="email"
                style={{ display: "block", fontWeight: "bold", marginTop: "10px" }}
            >
                Email:
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                style={{
                padding: "5px",
                margin: "5px 0",
                width: "100%",
                borderRadius: "3px",
                border: "1px solid #ccc",
                }}
            />

            <label
                htmlFor="password"
                style={{ display: "block", fontWeight: "bold", marginTop: "10px" }}
            >
                Password:
            </label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                style={{
                padding: "5px",
                margin: "5px 0",
                width: "100%",
                borderRadius: "3px",
                border: "1px solid #ccc",
                }}
            />

            <button type="submit" className="register btn btn-primary" value="Register">
                Register
            </button>
            </form>

        </div>
      

      <TabFooter />
    </section>
    </>
  );
}

export default CreateUser;
