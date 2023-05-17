import { styled } from 'styled-components';

const SectionContainer = styled.section`
  background-color: transparent;
  padding: 0 0 0 20px;
`;

const Titulo = styled.h2`
    color: #7B78E6;
    margin-left: 240px;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;
`;

const TagLista = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-right: 276px;
`;

const TagTitulo = styled.p`
    color: #D9D9D9;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    margin-right: 262px;
`;

const TagItem = styled.li`
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    width: 94px;
    height: 48px;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 24px;

    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      border: 2px solid;
      border-color: #C98CF1;
    }
`;

function CabecalhoGaleria() {
  return (
    <SectionContainer>
      <Titulo>Navegue pela galeria</Titulo>
      <TagLista>
        <TagTitulo>Busque por tags:</TagTitulo>
        <TagItem>Estrelas</TagItem>
        <TagItem>Galáxias</TagItem>
        <TagItem>Lua</TagItem>
        <TagItem>Planetas</TagItem>
      </TagLista>
    </SectionContainer>
  );
}

export default CabecalhoGaleria;