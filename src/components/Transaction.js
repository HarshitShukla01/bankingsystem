import React from 'react'
import Trcard from './Trcard'
const arr = require("../database/transactiondetail.json");

const Transaction = () => {
    return (
        <div className="container-fluid main-customer main_div_all">
      <h1 className="mainh1-customer">TRANSACTIONS</h1>
      <div className="container-fluid mainContainer-customer">
        <table className="table table-hover table-bordered table-customer">
        <thead>
          <tr className="table-dark ">
            <th scope="col">FROM NAME</th>
            <th scope="col">TO NAME</th>
            <th scope="col">DATE</th>
            <th scope="col">AMOUNT</th>
          </tr>
          </thead>
          <tbody>
          {arr.map((value, index) => {
            return <Trcard key={value.id} data={value} />;
          })}
          </tbody>
          
        </table>
      </div>
    </div>  
    )
}

export default Transaction
