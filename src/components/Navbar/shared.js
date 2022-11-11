import styled from "styled-components";

export const DropdownTitle = styled.span`
  font-size: 15px;
  color: inherit;
  cursor: pointer;
  transition: opacity 125ms ease-in;
  &:hover {
    opacity: 0.75;
  }
  &:not(:hover) {
    opacity: 1;
  }
`;

export const DropdownIconContainer = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: white;
`;

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

export const Icon = styled.div`
  width: 22px;
  height: 22px;
`;

export const Dropdown = styled.div`
  width: 300px;
  position: absolute;
  padding: 24px;
  top: 100%;
  left: -10%;
  background-color: white;
  border-radius: 6px;
  color: #24292f;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 150ms;
  pointer-events: none;
  transform-origin: top center;
  scale: 0.95;

  box-shadow: 0 5px 30px rgba(27, 31, 35, 0.1), 0 0 1px rgba(27, 31, 35, 0.4),
    0 1px 2px rgba(27, 31, 35, 0.15);
`;

export const DropdownSection = styled.div`
  width: 100%;
  flex: 4;
  &:not(:last-child) {
    margin-bottom: 16px;
    border-bottom: 1px solid #d0d7de;
  }
  &:last-child {
    margin-bottom: -16px;
  }
`;

export const DropdownHeading = styled.div`
  font-weight: 600;
  margin-top: 4px;
  font-size: 15px;
`;

export const DropdownContent = styled.ul`
  margin-top: 6px;
  padding-bottom: 16px;
  list-style: none;
`;

export const DropdownContentItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
`;

export const DropdownContentLink = styled.a`
  line-height: 1.25;
  padding-top: 8px;
  padding-bottom: 8px;
  position: relative;
  color: #57606a;
  display: block;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    color: #0969da;
  }
`;

export const DropdownSubHeading = styled.div`
  line-height: 1.25;
  color: #57606a;
  font-size: 13px;
`;

export const DropdownTitleContent = styled.div`
  cursor: pointer;
  &:hover,
  &:hover ${DropdownSubHeading} {
    color: #0969da;
  }
  padding-top: 2px;
  padding-bottom: 8px;
`;

export const DropdownLeftItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 8px;
  cursor: pointer;
  &:not(:last-child) {
    padding-bottom: 16px;
  }
  &:last-child {
    padding-bottom: 8px;
  }
  &:hover,
  &:hover ${DropdownSubHeading} {
    color: #0969da;
    fill: #0969da;
  }
  margin-top: -4px;
`;
