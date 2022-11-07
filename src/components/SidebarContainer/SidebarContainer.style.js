import styled from 'styled-components';
import { RiArrowDropDownLine } from '@react-icons/all-files/ri/RiArrowDropDownLine';
import { Link } from 'react-router-dom';

export const StyledSidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 53px;
`;

export const StyledLogoWrapper = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.border.default};
`;

export const StyledSidebarItem = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const StyledDropdownButton = styled(RiArrowDropDownLine)`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

export const StyledLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  transition: all 0.1s ease-in;
  cursor: pointer;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${(props) => props.theme.color.accent};
    background-color: ${(props) => props.theme.border.default};
    svg path {
      fill: ${(props) => props.theme.color.accent};
    }
  }

  ${(props) =>
    props.active === 'enable' &&
    `
    color: ${props.theme.color.accent} !important;
    background-color: ${props.theme.border.default};
    svg path {
      fill: ${props.theme.color.accent};
    }
    `}
`;

export const StyledLinkText = styled.span`
  display: inline-block;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.75px;
`;

export const StyledGuide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 260px 40px 100px 40px;
`;

export const StyledGuideCard = styled.button`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 30px 55px 30px 20px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.tipColor.default};
  cursor: pointer;
`;

export const StyledGuideText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: ${(props) => props.padding || 0};
`;

export const StyledTermLink = styled.a`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.06px;
  color: ${(props) => props.theme.color.label};
  text-decoration: underline;
`;
