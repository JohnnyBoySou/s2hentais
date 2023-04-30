import React, { useState } from 'react';
import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { API_URL } from '../../../api';

const ImageUploaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin: 10px;
`;

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
`;

const ImageUploader = ( props ) => {
  const [images, setImages] = useState([]);
  const token = props.token
  const handleDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setImages((prevState) => [...prevState, ...newImages]);
  };

  const handleRemove = (index) => {
    setImages((prevState) => prevState.filter((_, i) => i !== index));
  };

  const imageIds = [];
  const handleSubmit = () => {
    
    const headers = {
      'Content-Type': 'form/multipart',
      'Authorization': 'Bearer' + token,
    }

    const formData = new FormData();
    images.forEach((image) => {
      formData.append('file', image)
      axios.post(`${API_URL}/wp/v2/media`, formData, {headers: headers}).then(response => {
        imageIds.push(response.data.id);
      })
  });
  
  };


  
  return (
    <>
      <Dropzone onDrop={handleDrop} accept="image/jpeg, image/png, image/gif" multiple={true}>
        {({ getRootProps, getInputProps }) => (
          <ImageUploaderContainer {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Arraste e solte uma imagem aqui, ou clique para selecionar uma imagem.</p>
   
            {images.map((image, index) => (
              <ImageContainer key={index}>
                <Image src={image.preview} />
                <RemoveButton onClick={() => handleRemove(index)}>
                  <RiDeleteBinLine />
                </RemoveButton>
              </ImageContainer>
            ))}
          </ImageUploaderContainer>
        )}
      </Dropzone>
      <button onClick={handleSubmit}>Salvar</button>
    </>
  );
};

export default ImageUploader;