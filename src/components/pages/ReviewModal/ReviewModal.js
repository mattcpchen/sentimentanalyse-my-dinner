import React from 'react';
import styled from 'styled-components';
import {Modal} from '../../atoms/';
import ReviewCards from '../../organisms/ReviewCards';
import { closeReviewModal } from '../../../actions/modalAction';
import {connect} from "react-redux";


const CardHolder = styled.div`
  width: 60%;
  min-width: 320px;
  position: relative;
  top: 80px
`

let ReviewModal = ({dispatch}) => {

  const handleCloseModal = () => {
    dispatch( closeReviewModal() );
  };

  return (
    <Modal
      bgColor={ [0,0,0,0.5] }
      handleCloseModal={handleCloseModal}
    >
      <CardHolder>
        <ReviewCards
          handleCloseModal={handleCloseModal}
        />
      </CardHolder>
    </Modal>
  )
};

ReviewModal = connect(
  null,
  dispatch => ({dispatch})
)(ReviewModal);

export default ReviewModal;
