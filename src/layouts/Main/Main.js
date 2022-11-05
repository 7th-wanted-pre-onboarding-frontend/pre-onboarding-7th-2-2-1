import React from 'react';

import { Outlet } from 'react-router-dom';

import StyledMain from './Main.style';

import Section from '../Section/Section';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import SidebarContainer from '../../components/SidebarContainer/SidebarContainer';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';

export default function Main() {
  return (
    <StyledMain>
      <Sidebar>
        <SidebarContainer />
      </Sidebar>
      <Section>
        <Header>
          <HeaderContainer />
        </Header>
        <Outlet />
      </Section>
    </StyledMain>
  );
}
