import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ImageHolder = styled.div`
  display: inline-block;
`

const FaceIcon = ({className, icon}) => {
  const icons = [1,2,3,4,5,6];
  icon = icon || Math.floor(Math.random()*icons.length)+1;
  return (
    <ImageHolder className={className}>
      {/*<img src={require("./assets/face_0"+icon+".svg")}/>*/}
      <img src={"./assets/faces/face_0"+icon+".svg"}/>
    </ImageHolder>
  )
}

FaceIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.number
};
FaceIcon.defaultProps = {}


export default FaceIcon;
