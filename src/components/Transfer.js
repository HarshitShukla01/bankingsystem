import React from "react";
import { useParams } from "react-router";
import Forminput from "./Forminput";

const Transfer = () => {
  const { ctID } = useParams();
  const str = ctID.substring(0, ctID.length - 3).toUpperCase();
  return (
    <div className="container-fluid main_div_all maincontainer-transfer">
      <h1 className="mainh1-customer">MONEY TRANSFER</h1>
      <div className="card">
        <div className="card-header"><h5 className="card-title">Online Transaction</h5></div>
        <div className="card-body">
           <Forminput uid={ctID}/>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
