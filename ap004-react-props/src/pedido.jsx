import React from 'react'

const pedido = () => {
  return (
    <div className="card">
            <div className="card-header text-muted">16/06/2025</div>
            <div className="card-body d-flex">
              <div className = "d-flex align-items-center">
                <i className="fa solid fa-biker fa-2x"></i>
              </div>
              <div className="border flex-grow-1 rounded p-3">
                <h4 className="text-center">Bicicleta</h4>
                <p className="text-center">Bicicleta 18 marchas</p>
              </div>
            </div>
    </div>
  )
}

export default pedido