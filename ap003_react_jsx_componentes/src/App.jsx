import './styles.css'

const App = () => {

  const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', borderStyle: 'hidden', color:'white', width: '100%', borderRadius: 8}

  const textDoRotulo = 'Nome:'

  const obterTextoDoBotao = () => 'Enviar'

  const aoClicar = () => alert('Clicou')


  return <div style={{margin: 'auto', width: 576, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
    <label className= "rotulo" htmlFor="campoNome" style={{display: 'block', marginBottom: 8}}>
      {textDoRotulo}
    </label>

    <input type="text" id="campoNome" style={{paddingTop: 8, paddingBottom: 8, width: '100%', borderStyle: 'hidden', outiline:'none', borderRadius: 8}}/>

    <button style={estilosBotao} onClick = {() => aoClicar()}>
      {obterTextoDoBotao()}
      
    </button>

  </div>
}

export default App