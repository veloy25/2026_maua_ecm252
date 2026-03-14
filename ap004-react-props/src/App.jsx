import Pedido from "./pedido"

export default () =>{
  return(
    <div className="container border">
      <div className="row">

        <div className="col-12">

          <i className="fa-solid fa-hippo fa-2x"></i>

        </div>
       
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Pedido/>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Pedido/>
        </div>
         <div className="col-sm-12 col-md-6 col-xl-3">
          <Pedido/>
        </div>
      </div>
    </div>
  )
}
