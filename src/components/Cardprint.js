import React from "react";
import {NavLink } from "react-router-dom";

const Cardprint = (props) => {
  const data = props.data;
 const jumpto= `/transfer/${data.id}`
  return (
    <tr className=" ">
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>${data.amount}</td>
      <td>
        <button type="button" className="btn btn-info" >
          <NavLink className="navlink-cardprint" to={jumpto}>Transfer</NavLink>
        </button>
      </td>
    </tr>
  );
};

export default Cardprint;
/*
<div className="container-fluid maincard-cardprint">
        <h5>{data.id}</h5>
        <h5>{data.name}</h5>
        <h5>{data.email}</h5>
        <h5>{data.amount}</h5>
        <button>Transfer</button>
      </div>

*/
