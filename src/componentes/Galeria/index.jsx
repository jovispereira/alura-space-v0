import { styled } from 'styled-components';

const GaleriaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 240px;
  gap: 20px;
  padding: 20px;
`;

const PhotoWrapper = styled.div`
  position: relative;
`;

const Photo = styled.img`
    width: 288px;
    height: 205.71px;
    border-radius: 10px;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #04244F;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 16px;
  border-radius: 0px 0px 10px 10px;
`;

function Galeria() {
  const photos = [
    {
      src: 'src/assets/galeria/foto-1.png',
      caption: 'Nome da foto',
    },
    {
        src: 'src/assets/galeria/foto-2.png',
        caption: 'Nome da foto',
    },
    {
      src: 'src/assets/galeria/foto-3.png',
      caption: 'Nome da foto',
    },
    {
      src: 'src/assets/galeria/foto-4.png',
      caption: 'Nome da foto',
    },
    {
      src: 'src/assets/galeria/foto-5.png',
      caption: 'Nome da foto',
    },
    {
      src: 'src/assets/galeria/foto-6.png',
      caption: 'Nome da foto',
    },
    {
      src: 'src/assets/galeria/foto-7.png',
      caption: 'Nome da foto',
    },
    {
      src: 'src/assets/galeria/foto-8.png',
      caption: 'Nome da foto',
    },
    {
      src: 'src/assets/galeria/foto-9.png',
      caption: 'Nome da foto',
    },
    {
      src: 'src/assets/galeria/foto-10.png',
      caption: 'Nome da foto',
    },
  ];

  return (
    <GaleriaContainer>
      {photos.map((photo) => (
        <PhotoWrapper>
          <Photo src={photo.src} alt={photo.caption} />
          <Caption>{photo.caption}</Caption>
        </PhotoWrapper>
      ))}
    </GaleriaContainer>
  );
}

export default Galeria;