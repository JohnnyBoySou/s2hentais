import React, { useState } from 'react';
import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { API_URL } from '../../../api';
import { Label, Row, View } from '../styles';
import { Column } from '../../../theme/global';

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

const Search = ( props ) => {
  const token = props.token

  const result = [{'1': 1}, {'2': 2}]
  const query = {"item": 219}
  return (
    <View>
      <Column>
        <Row>
          <Label>Pesquisado por #ID: {query?.item}</Label>
          <Label>Encontramos {result?.length} resultados</Label>
        </Row>
      </Column>
     
    </View>
  );
};

export default Search;