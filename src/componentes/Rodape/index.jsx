import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
    width: 100vw;
    margin-top: 100px;
    background-color: #04244F;
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #FFFFFF;
    padding-right: 30px;
`;

function Rodape() {
    return (
        <RodapeEstilizado>
            <RodapeTexto>Desenvolvido por Alura.</RodapeTexto>
        </RodapeEstilizado>
    );
}

export default Rodape;
