import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Icon } from 'pcln-design-system';


// TODO: this setup is because DS's IconButton has PropTypes errors
// so create our own icon with some dummy props for bypassing the warning
// update to IconButton once it is fixed
const IconAsButton = styled(Icon)`
  cursor: pointer;
`
const IconDummyProps = {
  title: 'title',
  titleId: 'titleId',
  desc: 'desc',
  descId: 'descId'
};


const ReviewRatingButton = ({handleTFRatings}) => {
  return (
    <IconAsButton
      name='FreeCancellation'
      size={24}
      color='text'
      {...IconDummyProps}
      onClick={handleTFRatings}
    />
  )
};

ReviewRatingButton.propTypes = {
  handleTFRatings: PropTypes.func
}
ReviewRatingButton.defaultProps = {}


export default ReviewRatingButton;
