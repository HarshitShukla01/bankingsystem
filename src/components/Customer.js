import React from "react";
import Cardprint from "./Cardprint";
const arr = require("../database/members.json");
// const data=arr[0];
const Customer = () => {
  return (
    <div className="container-fluid main-customer main_div_all">
      <h1 className="mainh1-customer">CUSTOMERS</h1>
      <div className="container-fluid mainContainer-customer">
        <table className="table table-hover table-bordered table-customer">
        <thead>
          <tr className="table-dark ">
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">E-MAIL</th>
            <th scope="col">BALANCE</th>
            <th scope="col">TRANSFER NOW</th>
          </tr>
          </thead>
          <tbody>
          {arr.map((value, index) => {
            return <Cardprint key={value.id} data={value} />;
          })}
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default Customer;
