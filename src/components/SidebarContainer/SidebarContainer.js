import React from 'react';

import { AiOutlineDashboard } from '@react-icons/all-files/ai/AiOutlineDashboard';
import { AiOutlineLineChart } from '@react-icons/all-files/ai/AiOutlineLineChart';
import { AiOutlineBulb } from '@react-icons/all-files/ai/AiOutlineBulb';

import { useLocation } from 'react-router-dom';
import useDropdown from '../../utils/hooks/useDropdown';

import logo from '../../assets/image/onboardingLogo.png';
import {
  StyledSidebarContainer,
  StyledLogoWrapper,
  StyledSidebarItem,
  StyledDropdownButton,
  StyledLinkWrapper,
  StyledLink,
  StyledGuide,
  StyledContentWrapper,
  StyledGuideCard,
  StyledGuideText,
  StyledLinkText,
  StyledTermLink
} from './SidebarContainer.style';

import ServiceList from '../ServiceList/ServiceList';
import Typography from '../Typography/Typography';
import Dropdown from '../Dropdown/Dropdown';

export default function SidebarContainer() {
  const { selectedItem, isToggled, handleSelectBoxToggle, handleSelectItem } =
    useDropdown('매드업');
  const { pathname } = useLocation();

  function isActivePath(path, activepath) {
    return path === activepath ? 'enable' : 'disable';
  }

  return (
    <StyledSidebarContainer>
      <StyledContentWrapper>
        <StyledLogoWrapper>
          <img width='124px' height='30px' src={logo} alt='lever_logo' />
        </StyledLogoWrapper>
        <StyledSidebarItem>
          <label htmlFor='dropdown'>
            <Typography size='smBold' variant='label'>
              서비스
            </Typography>
          </label>
          <Dropdown id='dropdown' size='md'>
            <Typography size='xlg' variant='default'>
              {selectedItem}
            </Typography>
            <Typography size='xlg' variant='default'>
              <StyledDropdownButton onClick={handleSelectBoxToggle} />
            </Typography>
            {isToggled && <ServiceList handleSelectItem={handleSelectItem} />}
          </Dropdown>
        </StyledSidebarItem>
        <StyledSidebarItem>
          <label htmlFor='dropdown'>
            <Typography size='smBold' variant='label'>
              광고 센터
            </Typography>
          </label>
          <StyledLinkWrapper>
            <StyledLink
              to='/dashboard'
              active={isActivePath(pathname, '/dashboard')}
            >
              <AiOutlineDashboard />
              <StyledLinkText>대시보드</StyledLinkText>
            </StyledLink>
            <StyledLink
              to='/adsetup'
              active={isActivePath(pathname, '/adsetup')}
            >
              <AiOutlineLineChart />
              <StyledLinkText>광고관리</StyledLinkText>
            </StyledLink>
          </StyledLinkWrapper>
        </StyledSidebarItem>
      </StyledContentWrapper>
      <StyledGuide>
        <StyledGuideCard>
          <AiOutlineBulb size='40px' />
          <StyledGuideText>
            <Typography size='xlg' variant='default'>
              레버 이용 가이드
            </Typography>
            <Typography size='md' variant='label'>
              시작하기 전에 알아보기
            </Typography>
          </StyledGuideText>
        </StyledGuideCard>
        <StyledGuideText>
          <Typography size='md'>레버는 함께 만들어갑니다.</Typography>
          <StyledTermLink href='/#'>이용약관</StyledTermLink>
        </StyledGuideText>
      </StyledGuide>
    </StyledSidebarContainer>
  );
}
