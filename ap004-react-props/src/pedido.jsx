import React from 'react'

const pedido = (props) => {
  return (
      <div className="d-flex">
        <div className = "d-flex align-items-center">
          <i className={`fa solid fa-${props.icon} fa-2x`}></i>
        </div>
        <div className="border flex-grow-1 rounded p-3">
          <h4 className="text-center">{props.title}</h4>
          <p className="text-center">{props.description}</p>
        </div>
      </div>
  )
}

export default pedido