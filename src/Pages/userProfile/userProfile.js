import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const UserProfile = () => {
  const [data, setData] = React.useState([])

  const getUser = () => {
    let token = localStorage.getItem("token");
    console.log(token);

    let body = JSON.stringify({
      token: token,
    });

    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: body,
    };

    fetch("/api/v0/users/me", requestOptions)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          response.text().then(function (text) {
            setData(JSON.parse(text));
          });
        } else {
          throw new Error(response.status);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
      getUser();
  });

  return (
    <div className="container d-flex justify-content-center mt-sm-5">
      <Card className="shadow">
        <div className="row">
          <div className="col-12 col-sm-5">
            <img
              src={data.avatar}
              className="img-fluid profile-image col-10"
            />
          </div>
          <div className="col-12 col-sm-5 p-4 container row">
            <div className="col-12 col-sm-6">
              <label className="col-12 h4">Nombre</label>
              <span className="h6">{data.name}</span>
            </div>
            <div className="col-12 col-sm-5">
              <label className="col-12 h4">Apellido</label>
              <span className="h6">{data.surname}</span>
            </div>
            <div className="col-12 col-sm-12">
              <label className="col-12 h4">Email</label>
              <span className="h6">{data.email}</span>
            </div>
            <div className="col-12 col-sm-5">
              <label className="col-12 h4">Edad</label>
              <span className="h6">{data.age}</span>
            </div>
            <div className="col-12 col-sm-5">
              <label className="col-12 h4">Rol</label>
              <span className="h6">{data.role}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserProfile;
