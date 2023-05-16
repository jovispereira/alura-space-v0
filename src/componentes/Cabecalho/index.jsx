import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"

const CabecalhoEstilizado = styled.header`
    padding: 60px 24px;
    display: flex;
    justify-content: space-between;
`

const Cabecalho = () => {
    return (<CabecalhoEstilizado>
        <img src="/imagens/logo.png" alt="" />
        <CampoTexto placeholder="O que você procura?"/>
    </CabecalhoEstilizado>)
}

export default Cabecalho