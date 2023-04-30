import styled from 'styled-components';

const Image = styled.img`
  border-radius: 10px;
  cursor: pointer; width: 100%;
  height: 100%;
  object-fit: cover;
  border: ${props => props.isSelected ? '3px solid #5B72F2' : '3px solid transparent'};
`;

const ImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 6px;
`;

const Circle = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #5B72F2;
  color: white;
  font-size: 12px;
  font-family: ${props => props.theme.font.book};
  display: flex;
  align-items: center;
  justify-content: center;
`;


function ImageWithBorder({ imageUrl, onSelect, isSelected, index }) {
  const handleClick = () => {
    onSelect(imageUrl);
  };

  return <ImageContainer>
  <Image src={imageUrl} onClick={handleClick} isSelected={isSelected} />
  {isSelected && <Circle>{index}</Circle>}
</ImageContainer>;
}

export default ImageWithBorder;