import React from 'react'
import { Tab, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import Logo from '../../assets/BOOKR_LOGO.png';
import User from '../../assets/AVATAR.png';
import styled from 'styled-components';

const TabWrap = styled.div`
// margin: 0;
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 50px;
 background: #041A06;
 opacity: 0.8;
 position: fixed;
 z-index: 5;
`

function TabNav() {

  return (
    <TabWrap>
      <NavLink to="/" exact ><div style={{width: '50px', marginLeft: '20px', marginTop: '10px'}}><img style={{width: '100%'}} src={Logo} alt=""/></div></NavLink>
      <NavLink to="/user" exact><div style={{width: '30px', marginRight: '20px', marginTop: '10px'}}><img style={{width: '100%'}} src={User} alt=""/></div></NavLink>
    </TabWrap>
  )
}

export default TabNav;