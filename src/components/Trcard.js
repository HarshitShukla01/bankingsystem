import React from "react";

const Trcard = (props) => {
    const data = props.data;
  return <tr>
  <td>{data.fromname}</td>
  <td>{data.toname}</td>
  <td>{data.date}</td>
  <td>${data.amount}</td>
</tr>
};

export default Trcard;
