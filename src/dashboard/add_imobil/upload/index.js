import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { API_URL } from '../../../api';
import { ButtonPR } from '../../../theme/global'
import { UpBt } from '../stylesUpload';

const ImageUploaderContainer = styled.div`
  
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  margin: 30px 40px;
  border-radius: 12px;
  background: ${props => props.theme.color.primary}20;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin: 10px;
`;

const UploadLabel = styled.span`
  font-family: ${props => props.theme.font.book};
  font-size: 18px;
  margin-bottom: 20px;
  align-self: center;
  text-align: center;
  color: ${props => props.theme.color.title};
 
`


const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 34px;
  height: 34px;
  border-radius: 22px;
  background-color: red;
  color: #fff;  
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: black;
  }
`;

const ImageUploader = ({ props, onImagesUploaded }) => {
  const [images, setImages] = useState([]);
  const token = props?.token
  const handleDrop = (acceptedFiles) => {

    const newImages = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    
    const totalImages = images.length + imageIds.length;
    if (totalImages + acceptedFiles.length > 8) {
      alert('O limite máximo de imagens foi atingido (8 imagens)');
      return;
    }
  
    setImages((prevState) => [...prevState, ...newImages]);
  };

  const handleRemove = (index) => {
    setImages((prevState) => prevState.filter((_, i) => i !== index));
  };

  const imageIds = [];
    
  const headers = {
    'Content-Type': 'form/multipart',
    'Authorization': 'Bearer' + token,
  }

  const handleSubmit = () => {

    const formData = new FormData();
    images.forEach((image) => {
      formData.append('file', image)
      axios.post(`${API_URL}/wp/v2/media`, formData, {headers: headers}).then(response => {
        imageIds.push(response.data.id);
        onImagesUploaded(imageIds);
      })
  });};


  const handleDropRejected = (rejectedFiles) => {
    const fileTooLarge = rejectedFiles.find(file => file.size > 5242880); // verificar qual arquivo é maior que 5MB
    if (fileTooLarge) {
      alert('O arquivo selecionado é muito grande. Por favor, selecione um arquivo menor.');
    }
  };
  
  return (
    <>
      <Dropzone onDrop={handleDrop} accept="image/jpeg, image/png, image/gif" maxSize={5242880} multiple={true} disabled={images.length >= 8} onDropRejected={handleDropRejected}>
        {({ getRootProps, getInputProps }) => (
          <ImageUploaderContainer {...getRootProps()}>
            <input {...getInputProps()} />
            
            <AiOutlineCloudUpload size={42} style={{color: "#ED274A", margin: 'auto'}} />
         

            <Grid>
            {images.map((image, index) => (
              <ImageContainer key={index}>
                <Image src={image.preview} />
                <RemoveButton type="button" onClick={() => handleRemove(index)}>
                  <RiDeleteBinLine />
                </RemoveButton>
              </ImageContainer>
            ))}
            </Grid>
          </ImageUploaderContainer>
        )}
      </Dropzone>
      <ButtonPR disabled={imageIds.length > 1} style={{width: 200, margin: 'auto',}} onClick={handleSubmit}>Salvar</ButtonPR>
    </>
  );
};

export default ImageUploader;