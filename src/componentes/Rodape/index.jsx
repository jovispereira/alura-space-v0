import { styled } from 'styled-components';

const FooterEstilizado = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
    background-color: #04244F;
    padding: 0px 30px;
`;

const FooterTexto = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #FFFFFF;
`;

function Rodape() {
    return (
        <FooterEstilizado>
            <FooterTexto>Desenvolvido por Alura.</FooterTexto>
        </FooterEstilizado>
    );
}

export default Rodape;
