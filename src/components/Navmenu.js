import React from "react";
import { NavLink } from "react-router-dom";

const Navmenu = () => {
  return (
    <>
    <nav className="navbar sticky-top navclass-Navmenu"
        style={{ backgroundColor: " rgb(53 58 64 / 0%)" }}>
      <div className="container-fluid">
          <div className="navbar-header">
            <NavLink className="mainLink-nav" to="/" exact>
              Banking System
            </NavLink>
          </div>
          <ul className="nav navbar-right">
            <li className="">
              <NavLink className="homeLink-nav" to="/" activeClassName="activeclass" exact>Home</NavLink>
            </li>
            <li className="">
              <NavLink className="customerLink-nav" to="/customer" activeClassName="activeclass" exact>Customers</NavLink>
            </li>
            <li className="">
              <NavLink className="transactionLink-nav" to="/transaction" activeClassName="activeclass" exact>Transactions</NavLink>
            </li>
          </ul>
       </div>
      </nav>
    </>
  );
};

export default Navmenu;
