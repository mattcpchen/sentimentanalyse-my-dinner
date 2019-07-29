import React from 'react';
import styled from 'styled-components';
import { Modal } from '../../atoms/';


const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  margin-top:150px;
`

const LoadModal = () => {
  const imgSrc = '/assets/images/loader.svg';
  return (
    <Modal bgColor={ [255,255,255,0.5] }>
      <StyledImage src={imgSrc} />
    </Modal>
  )
};


export default LoadModal;
