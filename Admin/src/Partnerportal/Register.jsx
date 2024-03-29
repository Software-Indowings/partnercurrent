import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import img from "../images/2.png";
import logo from "../images/partner.png";
import backgroundImg from "../images/3.png";

function Register(props) {
  
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      setLoginStatus("passwordMismatch");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3307/partner/", credentials);
      if (res.status === 200) {
        setLoginStatus("success");
        navigate("/");
      } else {
        setLoginStatus("failed");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setLoginStatus("failed");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.8,
      }}
    >
      <MDBContainer className="my-5" style={{ padding: "5px" }}>
        <MDBCard
          style={{
            border: "2px solid orange",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src={img}
                alt="login form"
                className="rounded-start"
                style={{ width: "100%", height: "100%" }}
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column align-items-center">
                <div className="d-flex flex-row mt-2 align-items-center">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-0"
                    style={{ color: "#ff6219" }}
                  />
                  <img src={logo} alt="Logo" style={{ width: "280px" }} />
                </div>
                <h1
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    textAlign: "center",
                    fontSize: "42px",
                    fontFamily: "Arial, sans-serif",
                    color: "black",
                  }}
                >
                  Register here!
                </h1>
                {loginStatus === "success" && (
                  <p
                    style={{
                      color: "green",
                      fontSize: "24px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Registration Successful! Please log in.
                  </p>
                )}
                {loginStatus === "failed" && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "24px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Registration Failed!
                  </p>
                )}
                {loginStatus === "passwordMismatch" && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "24px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Passwords do not match.
                  </p>
                )}
                <br />

                <form onSubmit={handleSubmit} style={{ width: "80%" }}>
                  <div style={{ marginBottom: "30px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        fontSize: "19px",
                        fontFamily: "Arial, sans-serif",
                        color: "black",
                      }}
                      htmlFor="username"
                    >
                      Email
                    </label>
                    <MDBInput
                      wrapperClass="mb-6"
                      id="username"
                      type="email"
                      size="lg"
                      name="username"
                      value={credentials.username}
                      onChange={handleInputChange}
                      required
                      style={{
                        fontSize: "29px",
                        fontFamily: "Arial, sans-serif",
                        color: "black",
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        fontSize: "19px",
                        fontFamily: "Arial, sans-serif",
                        color: "black",
                      }}
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <MDBInput
                      wrapperClass="mb-4"
                      id="password"
                      type="password"
                      size="lg"
                      name="password"
                      value={credentials.password}
                      onChange={handleInputChange}
                      required
                      style={{
                        fontSize: "30px",
                        fontFamily: "Arial, sans-serif",
                        color: "black",
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        fontSize: "19px",
                        fontFamily: "Arial, sans-serif",
                        color: "black",
                      }}
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                    <MDBInput
                      wrapperClass="mb-4"
                      id="confirmPassword"
                      type="password"
                      size="lg"
                      name="confirmPassword"
                      value={credentials.confirmPassword}
                      onChange={handleInputChange}
                      required
                      style={{
                        fontSize: "30px",
                        fontFamily: "Arial, sans-serif",
                        color: "black",
                      }}
                    />
                  </div>
                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    type="submit"
                    style={{
                      width: "200px",
                      minWidth: "200px",
                      height: "50px",
                    }}
                  >
                    Register
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Register;
