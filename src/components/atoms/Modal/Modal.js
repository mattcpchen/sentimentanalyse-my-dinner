import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalHolder=styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: ${props => props.bgRGBS};
`

const ModalBG=styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Modal = ({
  className, bgColor, handleCloseModal,
  children
}) => {
  const bgR=bgColor[0], bgG=bgColor[1], bgB=bgColor[2], bgA=bgColor[3];
  const bgRGBS = `rgba(${bgR},${bgG},${bgB},${bgA})`;
  return (
    <ModalHolder
      className={className}
      bgRGBS={bgRGBS}
    >
      <ModalBG onClick={handleCloseModal} />
      {children}
    </ModalHolder>
  )
};

Modal.propTypes = {
  bgColor: PropTypes.array,
  handleCloseModal: PropTypes.func
};
Modal.defaultProps = {
  bgColor:[0,0,0,0.5]
}


export default Modal;
