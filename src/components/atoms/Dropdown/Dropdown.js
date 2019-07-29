import React  from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeColors } from '../../../helpers/ThemeSettings'
import DropdownOnly from './DropdownOnly';


const RelativeBox = styled.div`
  position: relative;
  width:${props => props.menuSize+'px'};
  height: 40px
`

const StyledDropdownOnly = styled(DropdownOnly)`
   position: absolute;
`

const Dropdown = ({className, onHandleChange, ...props}) => (
  <RelativeBox
    className={className}
    {...props}
  >
    <StyledDropdownOnly
      onHandleChange={onHandleChange}
      {...props}
    />
  </RelativeBox>
);

Dropdown.propTypes = {
  className: PropTypes.string,
  allMenus: PropTypes.array,
  menuSize:PropTypes.number,
  menuHeight:PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  offColor: PropTypes.string,
  onHandleChange: PropTypes.func
};
Dropdown.defaultProps = {
  allMenus: ['hello1', 'hello2', 'hello3'],
  menuSize: 120,
  menuHeight: '300px',
  bgColor: ThemeColors.white,
  textColor: ThemeColors.darkGray,
  offColor: ThemeColors.lightGray,
  onHandleChange: ()=>{}
};


export default Dropdown;
