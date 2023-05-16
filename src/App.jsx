import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Rodape from "./componentes/Rodape"
import CabecalhoGaleria from "./componentes/CabecalhoGaleria"
import Galeria from "./componentes/Galeria"
import NavegacaoPopulares from "./componentes/NavegacaoPopulares"
import bannerBackground from './assets/banner.png'

const MainEstilizado = styled.main`
  max-width: 100%;
  width: 1440px;
  margin: 0 auto;
`

const SecaoEstilizada = styled.section`
  padding: 8px 24px;
  display: flex;
  gap: 24px;
`

const SecaoGaleria = styled.section`
  display: flex;
  justify-content: space-between;
`

function App() {
  return ([<MainEstilizado>
    <EstilosGlobais />
    <Cabecalho />
    <SecaoEstilizada>
      <BarraLateral />  
      <Banner texto="A galeria mais completa de fotos do espaço!" backgroundImage={bannerBackground} />
    </SecaoEstilizada>
    <CabecalhoGaleria />
    <SecaoGaleria>
      <Galeria />
      <NavegacaoPopulares />
    </SecaoGaleria>
  </MainEstilizado>,
  <Rodape texto="Desenvolvido por Alura."/>]
  )
}

export default App
