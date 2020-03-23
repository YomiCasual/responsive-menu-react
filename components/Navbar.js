import React from 'react'


export default ({toggleModal}) => (
  <div className="navbar">
  <div className="navbar-menu" onClick={toggleModal}>
    <div className="navbar-bar"></div>
    <div className="navbar-bar"></div>
    <div className="navbar-bar"></div>
  </div>
  </div>
)