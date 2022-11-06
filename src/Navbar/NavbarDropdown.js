import { keyframes } from "styled-components";
import styled from "styled-components";
import { ChevronDownSVG } from "../svgs";

const OnHoverDropdownItem = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(10%); }
`;

const OnBlurDropdownItem = keyframes`
  from { transform: translateY(10%); }
  to { transform: translateY(0); }
`;

const DropdownIconContainer = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 4px;
`;

export const NavItem = styled.div`
  padding: 8px;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover ${DropdownIconContainer} {
    animation: ${OnHoverDropdownItem} 150ms linear forwards;
  }
  &:not(:hover) ${DropdownIconContainer} {
    animation: ${OnBlurDropdownItem} 150ms linear forwards;
  }
`;

const NavbarDropdown = ({ children }) => {
  return (
    <NavItem>
      <span>{children}</span>
      <DropdownIconContainer>{ChevronDownSVG}</DropdownIconContainer>
    </NavItem>
  );
};

export default NavbarDropdown;
