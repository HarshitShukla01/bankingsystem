import React from 'react'

const arr = require("../database/members.json");

const Forminput = ({uid}) => {
    const retdata = () => {
        let senddata;
      arr.map((value, index) => {
            if(value.id===uid)
            {
                senddata = value.name;
            }
      })
      return senddata;
    }
    const clickbtn = () =>{
        var retVal = prompt("Enter Submit to confirm : ");
        alert("Transacation Successful");
        
    }
    const data = retdata();
    return (
        <form className="form-data">
        <div className="mb-3">
          <label className="form-label">FULL NAME</label>
          <input type="text" className="form-control" value={data} disabled/>
        </div>
        <div className="mb-3">
          <label  className="form-label">AMOUNT (in Dollar)</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
        <label className="form-label">SEND TO</label>
         <select className="form-select" >
          <option selected>--select--</option>
            
            {arr.map((value, index) => {
                if(value.id!==uid)
            return <option value={value.id}>{value.name}</option>;
          })}
          </select>
        </div>
        <button type="submit" class="btn btn-primary" onClick={clickbtn}>Submit</button>
      </form>
    )
}

export default Forminput
