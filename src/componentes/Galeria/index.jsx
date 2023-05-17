import { styled } from 'styled-components';

const GaleriaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 240px;
  gap: 20px;
  padding: 20px;
`;

const CampoFoto = styled.div`
  position: relative;
`;

const Imagem = styled.img`
    width: 288px;
    height: 205.71px;
    border-radius: 0px;
`;

const Legenda = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 288px;
  height: 64px;
  background-color: #04244F;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #FFFFFF;
  font-size: 20px;
  border-radius: 0px 0px 20px 20px;
`;

const TextoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Texto = styled.p`
  margin: 0;
  padding-left: 10px;
  font-weight: bold;
`;

const SubTexto = styled.p`
  margin: 0;
  padding-left: 10px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: normal;
`;

const IconeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icone = styled.div`
  margin: 10px 0 0 5px;
  padding-right: 10px;
`;

function Galeria() {
  const imagens = Array.from(Array(10), (_, index) => ({
    src: `src/assets/galeria/foto-${index + 1}.png`,
    caption: 'Nome da foto',
  }));

  return (
    <GaleriaContainer>
      {imagens.map((imagem) => (
        <CampoFoto key={imagem.src}>
          <Imagem src={imagem.src} alt={imagem.caption} />
          <Legenda>
            <TextoContainer>
              <Texto>{imagem.caption}</Texto>
              <SubTexto>Fonte/fotógrafo/satélite</SubTexto>
            </TextoContainer>
            <IconeContainer>
              <Icone>
                <img src="src/assets/icones/favorito.png" alt="" />
              </Icone>
              <Icone>
                <img src="src/assets/icones/open.png" alt="" />
              </Icone>
            </IconeContainer>
          </Legenda>
        </CampoFoto>
      ))}
    </GaleriaContainer>
  );
}

export default Galeria;