import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeColors } from '../../../helpers/ThemeSettings'


const DropdownButton = styled.div`
  position: relative;
  width: ${props => (props.menuSize-35)+'px'};
  border-left: ${props => '5px solid '+props.textColor};
  padding: 5px 15px;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  box-shadow: ${props => '0 2px 5px '+props.textColor};
  display: flex;
  flex-direction:row;
  align-items:center;
  cursor: pointer;
`
const ButtonText = styled.span`
  color: ${props => props.textColor};
`
const ButtonArrow = styled.span`
  position:absolute;
  width: 0;
  height: 0;
  right: 20px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: ${props => props.isOpened? '' : '5px solid '+props.textColor};
  border-bottom: ${props => props.isOpened? '5px solid '+props.textColor : ''};
`
const DropdownMenus = styled.div`
  opacity:0;
  transition: opacity 0.1s ease-in;
  max-height: ${props => props.menuHeight};
  overflow-y: scroll;
  box-shadow: ${props => '0 2px 5px '+props.textColor};
  display: ${props => props.isOpened? 'block' : 'none'};
  opacity: ${props => props.isOpened? '1' : '0'};
`
const MenuItem = styled.div`
  width: ${props => (props.menuSize-35)+'px'};
  border-left: 5px solid;
  padding: 5px 15px;
  background-color: ${props => props.bgColor};
  cursor: pointer;
  border-left-color: ${props => props.isActive? ThemeColors.orange : props.offColor};
  &:hover {
    background-color: ${ThemeColors.lightGray};
    border-left-color: ${ThemeColors.orange};
  }
`

const DropdownOnly = (props) => {
  const { className, allMenus, placehold, defSelectedMenu, onHandleChange, ...styleProps } = props;
  const [isOpened, setMenusState] = useState(false);
  const [activeMenu, setActiveMenu] = useState(defSelectedMenu);

  const toggleMenus = () => {
    setMenusState(!isOpened);
  };

  const selectMenuItem = (content, index) => {
    setActiveMenu(index);
    onHandleChange(index);
    toggleMenus();
  };

  return (
    <div className={className}>
      <DropdownButton
        {...styleProps}
        onClick={toggleMenus}
      >
        <ButtonText {...styleProps}>{
          activeMenu===-1? placehold : allMenus[activeMenu]
        }</ButtonText>
        <ButtonArrow {...styleProps} isOpened={isOpened} />
      </DropdownButton>
      <DropdownMenus {...styleProps} isOpened={isOpened}>{
        allMenus.map((content, index) => (
          <MenuItem
            {...styleProps}
            key={`MenuItem-${content}-${index}`}
            isActive={index===activeMenu}
            onClick={()=>selectMenuItem(content, index)}
          >{content}</MenuItem>
        ))
      }</DropdownMenus>
    </div>
  )
};


DropdownOnly.propTypes = {
  className: PropTypes.string,
  allMenus: PropTypes.array,
  menuSize:PropTypes.number,
  menuHeight:PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  offColor: PropTypes.string,
  placehold: PropTypes.string,
  defSelectedMenu: PropTypes.number,
  onHandleChange: PropTypes.func
};
DropdownOnly.defaultProps = {
  allMenus: ['hello1', 'hello2', 'hello3'],
  menuSize: 120,
  menuHeight: '300px',
  bgColor: ThemeColors.white,
  textColor: ThemeColors.darkGray,
  offColor: ThemeColors.lightGray,
  defSelectedMenu: -1,
  onHandleChange: ()=>{}
};


export default DropdownOnly;
