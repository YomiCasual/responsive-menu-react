import React from 'react'

export default ({modalOpen, toggleModal}) => {

    const modalClass = modalOpen ? "menu-modal open" : "menu-modal"
    return (
      <div className={modalClass}>
      <div className="menu-items">
      <h4>Check my porfolio as</h4>
      <h3>Front-End Developer</h3>
      <h3>Graphic Designer</h3>
      <h3>UI Designer</h3>
      <h3>Brand Designer</h3>
      <h3>Chemist</h3>
      </div>
       <button className="close-modal" onClick={toggleModal}>X</button>
      </div>
    )

}