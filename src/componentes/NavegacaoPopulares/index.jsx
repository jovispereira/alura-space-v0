import { styled } from 'styled-components';

const BarraLateralContainer = styled.div`
    position: relative;
    bottom: 130px;
    width: 300px;
    height: 100vh;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Titulo = styled.h2`
    color: #7B78E6;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;
`;

const Imagem = styled.img`
    width: 212px;
    height: 118;
    margin-bottom: 16px;
`;

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 29px;
    font-size: 20px;
    line-height: 24px;
    width: 208px;
    height: 51px;
    border-radius: 10px;
    cursor: pointer;
`;

function NavegacaoPopulares() {
    return (
        <BarraLateralContainer>
        <Titulo>Populares</Titulo>
        <Imagem src="src/assets/populares/foto-1.png" alt="Imagem 1" />
        <Imagem src="src/assets/populares/foto-2.png" alt="Imagem 2" />
        <Imagem src="src/assets/populares/foto-3.png" alt="Imagem 3" />
        <Imagem src="src/assets/populares/foto-4.png" alt="Imagem 4" />
        <Imagem src="src/assets/populares/foto-5.png" alt="Imagem 5" />
        <Botao>Ver mais</Botao>
        </BarraLateralContainer>
    );
}

export default NavegacaoPopulares;