import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100vw;
    margin-top: 100px;
    background-color: #04244F;
`;

const IconeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icone = styled.div`
  font-size: 24px;
  color: #FFFFFF;
  margin-left: 30px;
  padding-right: 4px;
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
            <IconeContainer>
                <Icone>
                    <img src="src/assets/icones/facebook.svg" alt="" />
                </Icone>
                <Icone>
                    <img src="src/assets/icones/twitter.svg" alt="" />
                </Icone>
                <Icone>
                    <img src="src/assets/icones/instagram.svg" alt="" />
                </Icone>
            </IconeContainer>
            <RodapeTexto>Desenvolvido por Alura.</RodapeTexto>
        </RodapeEstilizado>
    );
}

export default Rodape;
