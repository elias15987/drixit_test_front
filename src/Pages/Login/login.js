import React, { useState, useEffect } from "react";
import Logo from "../../Content/Img/logo.png";
import "../../Content/Css/Site.css";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../Components/Login/customInput";
import Footer from "../../Components/Layout/footer";
import { FaUserAlt, FaKey } from "react-icons/fa";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});

  const { Errors } = require("../Utils/errors");

  const [visibleAlert, setAlertVisible] = useState(false);

  const navigate = useNavigate();

  //Submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    let { emailInput, passInput } = document.forms[0];
    login(emailInput.value, passInput.value);
  };

  //view error

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <Alert
        show={visibleAlert}
        severity="error"
        className="fade alert alert-danger"
      >
        {errorMessages.message}
      </Alert>
    );

  const handleVisible = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 500);
  };

  useEffect(() => {
    return () => {
      handleVisible();
    };
  });

  function login(email, pass) {
    let body = JSON.stringify({
      email: email,
      password: pass,
    });

    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    };

    fetch("/api/v0/authenticate", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(response.status);
        }
      })
      .then((result) => {
        debugger;
        let json = JSON.parse(result);
        localStorage.setItem("token", json.jwt);
        navigate("/Inicio");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessages({ name: "errorLogin", message: Errors.errorLogin });
      });
  }

  return (
    <div className="container my-auto alturaLogin">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-white text-dark shadow rounded radioLogin">
            <div className="card-body pl-5 pr-5">
              <div className="mb-md-5 mt-md-1 p-4 text-center">
                <img className="image-fluid col-12 mb-2" src={Logo} />
                <Form className="mt-3" onSubmit={handleSubmit}>
                  <CustomInput
                    text="Email"
                    type="text"
                    name="emailInput"
                    placeholder="Email"
                    icon={<FaUserAlt className="mb-1" />}
                  />
                  <CustomInput
                    text="Contraseña"
                    type="password"
                    name={"passInput"}
                    placeholder="Contraseña"
                    icon={<FaKey className="mb-1" />}
                  />
                  {renderErrorMessage("errorLogin")}
                  <p className="small mb-3 pb-lg-2 text-center">
                    <a className="text-dark" href="#!">
                      ¿Olvidaste la contraseña?
                    </a>
                  </p>
                  <div className="text-center">
                    <Button
                      variant="primary"
                      className="btn btn-primary btn-lg btn-block col-12"
                      type="submit"
                    >
                      Iniciar sesión
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
