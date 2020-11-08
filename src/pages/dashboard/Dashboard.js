import React from 'react'
import Weather from "../../components/weather/Weather";
import './Dashboard.scss'


const Dashboard = ({Logout, user}) => {
    return (
        <div className="dashboard">
          <div className="container">
              <div className="space">
                  <img src="/images/space.png" alt=""/>
              </div>
              <div className="weather">
                  <Weather />
                  <div className="weather-icon">
                  
                  </div>
              </div>
          </div> 
          <span>{user.email}</span>
        </div>
    )
}

export default Dashboard
