import React, { useEffect } from 'react';

import { Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import StyledMain from './Main.style';

import Section from '../Section/Section';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import SidebarContainer from '../../components/SidebarContainer/SidebarContainer';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import { adListState } from '../../store/adList';
import ADLIST_API from '../../api/adList';

export default function Main() {
  const setAdList = useSetRecoilState(adListState);

  useEffect(() => {
    const getAdList = async () => {
      ADLIST_API.get().then((data) => {
        setAdList(data.ads);
      });
    };

    getAdList();
  }, []);
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
