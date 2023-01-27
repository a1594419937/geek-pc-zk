import React, { Component } from "react";
import logo from '../../assets/logo.png'
import { Card } from 'antd'
import './index.css'
export default class Login extends Component {
  render(){
    return (
      <div className="login">
      <Card className="login-container">
        <img src= {logo} alt="" />
      </Card>
    </div>
    )
  }
}