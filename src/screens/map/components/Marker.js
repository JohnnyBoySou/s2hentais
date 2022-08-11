import React from 'react';
import styled from 'styled-components';

const Bt = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;



const Marker = ( props ) => {
 
  const handleClick = () => {
    console.log(props)
  }

  const data = props.data

  return (
    <Bt>
      {data?.ID}
    </Bt>
  );
};


export default Marker;