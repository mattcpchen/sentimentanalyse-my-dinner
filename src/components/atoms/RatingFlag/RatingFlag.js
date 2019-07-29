import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeColors } from '../../../helpers/ThemeSettings';
import { Flag } from 'pcln-design-system';


const StyledFlag = styled(Flag)`
  font-weight: 600;
  font-size: 20px;
  text-shadow: 0 0 3px #333, 0 0 5px #fff;
`

const RatingFlag = ({className, width, text}) => (
  <StyledFlag
    className={className}
    bg={ThemeColors.orange}
    width={width}
  >
    {text}
  </StyledFlag>
);

RatingFlag.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string
};
RatingFlag.defaultProps = {
  text: '3',
  width: ''
};


export default RatingFlag;
