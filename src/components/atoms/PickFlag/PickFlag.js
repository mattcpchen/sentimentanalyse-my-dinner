import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flag } from 'pcln-design-system';


const StyledFlag = styled(Flag)`
  font-weight: 600;
  font-size: 20px;
  text-shadow: 0 0 3px #333, 0 0 5px #fff;
  box-shadow: 0 0 5px 1px #999;
`

const PickFlag = ({className, width, text, textColor, bgColor}) => (
  <StyledFlag
    className={className}
    color={textColor}
    bg={bgColor}
    width={width}
  >
    {text}
  </StyledFlag>
);

PickFlag.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  width: PropTypes.string
};
PickFlag.defaultProps = {
  text: 'OUR PICKS',
  textColor: '#000',
  bgColor: '#333',
  width: ''
};


export default PickFlag;
