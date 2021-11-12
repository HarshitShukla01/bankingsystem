import React from 'react'
import './comp.css'
import euro from './euro.png'
import robberpig from './piggybank.gif'
const Home = () => {
    return (
    <>
        <div className="container-fluid main_div_all">
            <h1 className="h1-home">WELCOME TO THE NETBANKING</h1>
            <div className="pdiv-home container-fluid">
            <p>Banking online means accessing your bank account and carrying out financial transactions through the internet on your smartphone, tablet or computer.</p> 
            <p>It's quick, usually free and allows you to do tasks, such as paying bills and transferring money, without having to visit or call your bank.</p>
            <p>You can avail the banking services round the clock throughout the year. Most of the services offered are not time-restricted; you can check your account balance at any time and transfer funds without having to wait for the bank to open.
            </p>
            </div>
            <div className="imgdiv-home">
                <img src={euro} className="img-home bounce"/>
            </div>
            <div className="">
                <img src={robberpig} className="imgbank-home"/>
            </div>
        </div>   
    </>
    )
}

export default Home
