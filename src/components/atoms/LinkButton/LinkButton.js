import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeColors } from '../../../helpers/ThemeSettings';

const StyledLinkButton = styled.div`
  display: inline-block;
  color: ${props => props.fontColor};
  font-weight: ${props => props.fontWeight};
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  padding: 0.375rem 0.75rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const LinkButton = ({className, handleClick, fontColor, fontWeight, children}) => (
  <StyledLinkButton
    className={className}
    fontWeight={fontWeight}
    fontColor={fontColor}
    onClick={handleClick}
  >
    {children}
  </StyledLinkButton>
);

LinkButton.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  fontColor: PropTypes.string,
  fontWeight: PropTypes.string,
  children: PropTypes.any
};
LinkButton.defaultProps = {
  fontColor: ThemeColors.orange,
  fontWeight: 'normal'
}


export default LinkButton;
