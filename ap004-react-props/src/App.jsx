import Pedido from "./Pedido"
import Cartao from "./cartao"
import Feedback from "./Feedback"

export default () =>{
  const textoOK = "Já recebi"
  const textoNOK = "Ainda não recebi"
  const funcaoOK = () => alert("Agradecemos o feedback")
  const funcaoNOK = () => alert("Verificaremos")
  const componenteFeedback = (
    <Feedback
      funcaoOK = {funcaoOK}
      funcaoNOK = {funcaoNOK}
      textoOK = {textoOK}
      textoNOK = {textoNOK}
    />
  )

  return(
    <div className="container border">
      <div className="row">

        <div className="col-12">

          <i className="fa-solid fa-hippo fa-2x"></i>

        </div>
       
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Cartao cabecalho = "22/02/2026">
            <Pedido
            icon = "camera"
            title = "Câmera"
            description = "Uma Câmera 4K"
            />
            {componenteFeedback}
          </Cartao>
          
        </div>

        <div className="col-sm-12 col-md-6 col-xl-3">
          <Cartao cabecalho = "22/02/2026">
            <Pedido
              icon = "bicycle"
              title = "Bicicleta"
              description = "Uma bicicleta de 12 marchas"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xl-3">
          <Cartao cabecalho = "22/02/2026">
            <Pedido
              icon = "hippo"
              title = "Hipopótamo"
              description = "Um filhote de Hipo"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xl-3">
          <Cartao cabecalho="22/02/2026">
            <Pedido
            data = "15/02/2026"
            icon = "book"
            title = "Livro"
            description = "Concrete Maths"
            />
            {componenteFeedback}
          </Cartao>
        </div>

      </div>
    </div>
  )
}
