import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { Dropdown, LinkButton } from '../../atoms/';
import { allCuisines, allSortbys } from '../../../helpers/data';
import { ThemeColors } from '../../../helpers/ThemeSettings';
import { getGeoLocation, fetchAllRestaurants } from '../../../helpers/utilities';
import { retriveMyFavCookie } from '../../../helpers/storageHandlers';
import { openLoadModal, closeLoadModal } from '../../../actions/modalAction';
import { updateUserLocation, chooseCuisine, chooseSortby } from '../../../actions/uiAction';
import { updateRestaurants } from '../../../actions/restaurants';

const StyledSearchHeader = styled.div`
  background-color: #eee;
  min-width: 320px;
  border: 1px solid #999;
  border-radius: 10px;
  position: relative;
  -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.4);
  -moz-box-shadow: 0 2px 5px rgba(0,0,0,.4);
  -ms-box-shadow: 0 2px 5px rgba(0,0,0,.4);
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 600px),
         only screen and (max-device-width: 600px){
    flex-direction: column;
    align-items: center;
  }
`

const LogoImage = styled.div`
  width: 260px;
  background-image: ${props => 'url("'+props.src+'")'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
  @media screen and (max-width: 600px),
         only screen and (max-device-width: 600px){
    height: 80px;
  }
`

const Controller = styled.div``

const ControllerHeader=styled.div`
  color: ${ThemeColors.text};
  margin-bottom: 15px;
  
  @media screen and (max-width: 600px),
         only screen and (max-device-width: 600px){
    text-align: center;
  }
`

const ControllerBody=styled.div`
  display: flex;
  align-content: center;
  justify-items: center;
  
  @media screen and (max-width: 600px),
         only screen and (max-device-width: 600px){
    flex-direction: column;
    align-items: center;
  }
`

const StyledLinkButton=styled(LinkButton)`
  width: 100px;
`

const StyledDropdown = styled(Dropdown)`
  margin-right: ${props => props.position==='left'?'8px':'0'};
  margin-left: ${props => props.position==='right'?'8px':'0'};
  
  @media screen and (max-width: 600px),
         only screen and (max-device-width: 600px){
    margin-left: 0;
    margin-right: 0;
  }
`

const mapStateToProps = (state) => {
  return {
    userLocation: state.userLocation,
    cuisineId: state.cuisine.id,
    sortby: state.sortby,
    restaurants: state.restaurants
  }
};

let SearchHeader = (props) => {
  const { className, userLocation, cuisineId, sortby, restaurants, dispatch } = props;

  const cuisineMenus = allCuisines.map(cuisine=>cuisine.cuisine_name);
  const sortbyMenus = allSortbys.map(sortby => sortby.name);

  const handleChangeCuisine = (menuIndex) => {
    const cuisineId = allCuisines[menuIndex].cuisine_id;
    const cuisineName = allCuisines[menuIndex].cuisine_name;
    dispatch( chooseCuisine(cuisineId, cuisineName) );
  };
  const handleChangeSortby = (menuIndex) => {
    const sortbyValue = allSortbys[menuIndex].value;
    dispatch( chooseSortby(sortbyValue) );
  };

  const clickSearchRests = () => {
    if(cuisineId === -1) {
      alert('Please tell us what do you want to eat?');
      return;
    }
    if(sortby === '') {
      alert('Please tell us what importance you think the guest reviews are compare to the overall rating?');
      return;
    }
    dispatch( openLoadModal() );
    if(userLocation.error) {
      dispatch( closeLoadModal() );
      alert('display error message');
    } else if(userLocation.lon && userLocation.lat) {
      handleSearchRests(userLocation);
    } else {
      getGeoLocation(data => {
        if(data.error) {
          dispatch( updateUserLocation(data) );
          dispatch( closeLoadModal() );
          alert('display error message');
        } else {
          dispatch( updateUserLocation(data) );
          handleSearchRests(data);
        }
      });
    }
  };
  const handleSearchRests = (userLocation)=> {
    const myCookieFavors = retriveMyFavCookie();
    fetchAllRestaurants({
      cuisines: cuisineId,
      favors: myCookieFavors.join('|'),
      lon: userLocation.lon.toString(),
      lat: userLocation.lat.toString(),
    }, (restData) => {
      dispatch( updateRestaurants(restData, sortby) );
      dispatch( closeLoadModal() );
    });
  };

  return(
    <StyledSearchHeader className={className}>
      <LogoImage src="./assets/images/tfLogo_02.svg" />

      <Controller>
        <ControllerHeader>
          Find the best restaurant most people like around you!
        </ControllerHeader>

        <ControllerBody>
          <StyledDropdown
            allMenus={cuisineMenus}
            menuSize={155}
            placehold='Cuisine'
            position='left'
            onHandleChange={handleChangeCuisine}
            style={{zIndex:'1'}}
          />
          <StyledDropdown
            allMenus={sortbyMenus}
            menuSize={155}
            placehold='Sort By'
            defSelectedMenu={0} // default preset = distance (menuId=0; reducer='distance')
            position='right'
            onHandleChange={handleChangeSortby}
          />
          <StyledLinkButton
            fontWeight='900'
            handleClick={clickSearchRests}
          >Let's Go</StyledLinkButton>
        </ControllerBody>

      </Controller>

    </StyledSearchHeader>
  );
};

SearchHeader.propTypes = {
  className: PropTypes.string
};

SearchHeader.defaultProps = {};


SearchHeader = connect(
  mapStateToProps,
  dispatch => ({dispatch})
)(SearchHeader);

export default SearchHeader;
