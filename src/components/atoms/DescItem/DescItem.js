import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDescItem = styled.div`
  display: flex;
  line-height: 22px;
  align-items: center;
`

const Title=styled.span`
  font-weight: 600;
  margin-right: 5px;
`
const Content=styled.span`
  font-size: 14px;
  display: flex;
`

const DescItem = ({title, content}) => (
  <StyledDescItem>
    <Title>{title}:</Title>
    <Content>{content}</Content>
  </StyledDescItem>
);

DescItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node
  ])
};
DescItem.defaultProps = {
  title: 'Title',
  content: 'Content'
}


export default DescItem;
