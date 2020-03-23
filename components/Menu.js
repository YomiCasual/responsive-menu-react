import React from 'react'

export default ({modalOpen, toggleModal}) => {

    const modalClass = modalOpen ? "menu-modal open" : "menu-modal"

    return (
      <div className={modalClass}>
      <div className="menu-items">
      <h3>Home</h3>
      <h3>Items</h3>
      <h3>About</h3>
      <h3>Learn More</h3>
      <h3>Contact</h3>
      </div>
         <button className="close-modal" onClick={toggleModal}>X</button>
      </div>
    )

}