import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { HomePage, ReviewModal, LoadModal } from './pages/';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


const StyledApp = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`
const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    modalState: Boolean(state.reviewModal.restId)
  }
};

class Application extends Component {
  constructor (props) {
    super(props)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleCloseModal() {
    this.props.dispatch( closeReviewModal() );
  }

  render() {
    return (
      <StyledApp>
        <HomePage />
        {this.props.modalState && <ReviewModal show={true} />}
        {this.props.isLoading && <LoadModal />}
      </StyledApp>
    )
  }
}


Application = connect(
  mapStateToProps,
  dispatch => ({dispatch})
)(Application);

export default Application;
