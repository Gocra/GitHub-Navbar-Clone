import styled from "styled-components";
import {
  DropdownSection,
  DropdownHeading,
  DropdownContent,
  DropdownContentItem,
  DropdownContentLink,
  DropdownSubHeading,
  DropdownTitleContent,
  IconContainer,
  Icon,
  DropdownLeftItem,
} from "./shared";
import { ChevronDownSVG } from "../../svgs";
import { useState } from "react";
import { SearchBox, SearchInput } from "./Searchbar";

const MobileDropdownContainer = styled.div`
  position: absolute;
  right: 3vw;
  top: calc(72px + 3vh);
  background-color: white;
  border-radius: 6px;
  width: 320px;
  height: 85vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  overflow-x: hidden;

  @media (max-width: 543px) {
    width: calc(100% - 6vw);
    margin-left: 16px;
  }
`;

const NavItem = styled.div`
  color: black;
  width: 100%;
`;

const NavItemHeaderContainer = styled.div`
  fill: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
`;

const Nav = styled.nav`
  padding: 16px;
  padding-top: 0;
  height: fit-content;
  width: 100%;
`;

const DropdownTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: inherit;
  cursor: pointer;
  padding: 16px 0;
`;

const DropdownIconContainer = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 4px;
`;

const Dropdown = styled.div`
  width: 100%;
  background-color: white;
  color: #24292f;
`;

const UserSection = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const SignInButton = styled.a`
  background: none;
  border: 1px solid var(#d0d7de);
  background-color: #24292f;
  border-color: #24292f;
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  padding: 8px;
  font-weight: 600;
  border-radius: 6px;
  width: 100%;
`;

export const MobileDropdownSignup = styled.div``;

const MobileDropdown = () => {
  const [indexOpen, setIndexOpen] = useState(null);

  const handleClick = (i) => {
    setIndexOpen(indexOpen == i ? null : i);
  };

  return (
    <MobileDropdownContainer>
      <Nav>
        <Product handleClick={handleClick} i={0} isOpen={indexOpen == 0} />
        <Solutions handleClick={handleClick} i={1} isOpen={indexOpen == 1} />
        <OpenSource handleClick={handleClick} i={2} isOpen={indexOpen == 2} />
        <Pricing handleClick={handleClick} i={3} isOpen={indexOpen == 3} />
      </Nav>
      <UserSection>
        <SearchBox
          style={{
            width: "100%",
            padding: "0",
            margin: "0",
            backgroundColor: "#f6f8fa",
            borderColor: "hsla(210,18%,87%,1)",
          }}
        >
          <SearchInput placeholder="Search GitHub" style={{ color: "black" }} />
        </SearchBox>
        <SignInButton>Sign in</SignInButton>
      </UserSection>
    </MobileDropdownContainer>
  );
};

const Product = ({ isOpen, handleClick, i }) => {
  return (
    <NavItem onClick={() => handleClick(i)}>
      <NavItemHeaderContainer>
        <DropdownTitle>Product</DropdownTitle>
        <DropdownIconContainer>{ChevronDownSVG}</DropdownIconContainer>
      </NavItemHeaderContainer>
      {isOpen && (
        <>
          <DropdownLeftItem>
            <IconContainer>
              <Icon>
                <svg height="24" viewBox="0 0 24 24" width="24">
                  <path d="M1 3a2 2 0 012-2h6.5a2 2 0 012 2v6.5a2 2 0 01-2 2H7v4.063C7 16.355 7.644 17 8.438 17H12.5v-2.5a2 2 0 012-2H21a2 2 0 012 2V21a2 2 0 01-2 2h-6.5a2 2 0 01-2-2v-2.5H8.437A2.938 2.938 0 015.5 15.562V11.5H3a2 2 0 01-2-2V3zm2-.5a.5.5 0 00-.5.5v6.5a.5.5 0 00.5.5h6.5a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5H3zM14.5 14a.5.5 0 00-.5.5V21a.5.5 0 00.5.5H21a.5.5 0 00.5-.5v-6.5a.5.5 0 00-.5-.5h-6.5z"></path>
                </svg>
              </Icon>
            </IconContainer>
            <div>
              <DropdownHeading>Actions</DropdownHeading>
              <DropdownSubHeading>Automate any workflow</DropdownSubHeading>
            </div>
          </DropdownLeftItem>
          <DropdownLeftItem>
            <IconContainer>
              <Icon>
                <svg height="24" viewBox="0 0 24 24" width="24">
                  <path
                    fillRule="evenodd"
                    d="M12.876.64a1.75 1.75 0 00-1.75 0l-8.25 4.762a1.75 1.75 0 00-.875 1.515v9.525c0 .625.334 1.203.875 1.515l8.25 4.763a1.75 1.75 0 001.75 0l8.25-4.762a1.75 1.75 0 00.875-1.516V6.917a1.75 1.75 0 00-.875-1.515L12.876.639zm-1 1.298a.25.25 0 01.25 0l7.625 4.402-7.75 4.474-7.75-4.474 7.625-4.402zM3.501 7.64v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947L3.501 7.64zm9.25 13.421l7.625-4.402a.25.25 0 00.125-.216V7.639l-7.75 4.474v8.947z"
                  ></path>
                </svg>
              </Icon>
            </IconContainer>
            <div>
              <DropdownHeading>Packages</DropdownHeading>
              <DropdownSubHeading>Host and manage packages</DropdownSubHeading>
            </div>
          </DropdownLeftItem>
          <DropdownLeftItem>
            <IconContainer>
              <Icon>
                <svg height="24" viewBox="0 0 24 24" width="24">
                  <path d="M16.53 9.78a.75.75 0 00-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l5-5z"></path>
                  <path
                    fillRule="evenodd"
                    d="M12.54.637a1.75 1.75 0 00-1.08 0L3.21 3.312A1.75 1.75 0 002 4.976V10c0 6.19 3.77 10.705 9.401 12.83.386.145.812.145 1.198 0C18.229 20.704 22 16.19 22 10V4.976c0-.759-.49-1.43-1.21-1.664L12.54.637zm-.617 1.426a.25.25 0 01.154 0l8.25 2.676a.25.25 0 01.173.237V10c0 5.461-3.28 9.483-8.43 11.426a.2.2 0 01-.14 0C6.78 19.483 3.5 15.46 3.5 10V4.976c0-.108.069-.203.173-.237l8.25-2.676z"
                  ></path>
                </svg>
              </Icon>
            </IconContainer>
            <div>
              <DropdownHeading>Security</DropdownHeading>
              <DropdownSubHeading>
                Find and fix vulerabilities
              </DropdownSubHeading>
            </div>
          </DropdownLeftItem>
          <DropdownLeftItem>
            <IconContainer>
              <Icon>
                <svg height="24" viewBox="0 0 24 24" width="24">
                  <path
                    fillRule="evenodd"
                    d="M3.5 3.75C3.5 2.784 4.284 2 5.25 2h13.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0118.75 13H5.25a1.75 1.75 0 01-1.75-1.75v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h13.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H5.25zM1.5 15.75c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 01-1.75 1.75H3.25a1.75 1.75 0 01-1.75-1.75v-4zm1.75-.25a.25.25 0 00-.25.25v4c0 .138.112.25.25.25h17.5a.25.25 0 00.25-.25v-4a.25.25 0 00-.25-.25H3.25z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M10 17.75a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75zm-4 0a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75z"
                  ></path>
                </svg>
              </Icon>
            </IconContainer>
            <div>
              <DropdownHeading>Codespaces</DropdownHeading>
              <DropdownSubHeading>Instant dev environment</DropdownSubHeading>
            </div>
          </DropdownLeftItem>
          <DropdownLeftItem>
            <IconContainer>
              <Icon>
                <svg height="24" viewBox="0 0 24 24" width="24">
                  <path d="M9.75 14a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5a.75.75 0 01.75-.75zm4.5 0a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5a.75.75 0 01.75-.75z"></path>
                  <path
                    fillRule="evenodd"
                    d="M12 2c-2.214 0-4.248.657-5.747 1.756a7.43 7.43 0 00-.397.312c-.584.235-1.077.546-1.474.952-.85.87-1.132 2.037-1.132 3.368 0 .368.014.733.052 1.086l-.633 1.478-.043.022A4.75 4.75 0 000 15.222v1.028c0 .529.31.987.564 1.293.28.336.637.653.967.918a13.262 13.262 0 001.299.911l.024.015.006.004.04.025.144.087c.124.073.304.177.535.3.46.245 1.122.57 1.942.894C7.155 21.344 9.439 22 12 22s4.845-.656 6.48-1.303c.819-.324 1.481-.65 1.941-.895a13.797 13.797 0 00.68-.386l.039-.025.006-.004.024-.015a8.829 8.829 0 00.387-.248c.245-.164.577-.396.912-.663.33-.265.686-.582.966-.918.256-.306.565-.764.565-1.293v-1.028a4.75 4.75 0 00-2.626-4.248l-.043-.022-.633-1.478c.038-.353.052-.718.052-1.086 0-1.331-.282-2.499-1.132-3.368-.397-.406-.89-.717-1.474-.952a7.386 7.386 0 00-.397-.312C16.248 2.657 14.214 2 12 2zm-8 9.654l.038-.09c.046.06.094.12.145.177.793.9 2.057 1.259 3.782 1.259 1.59 0 2.739-.544 3.508-1.492.131-.161.249-.331.355-.508a32.948 32.948 0 00.344 0c.106.177.224.347.355.508.77.948 1.918 1.492 3.508 1.492 1.725 0 2.989-.359 3.782-1.259.05-.057.099-.116.145-.177l.038.09v6.669a17.618 17.618 0 01-2.073.98C16.405 19.906 14.314 20.5 12 20.5c-2.314 0-4.405-.594-5.927-1.197A17.62 17.62 0 014 18.323v-6.67zm6.309-1.092a2.35 2.35 0 01-.38.374c-.437.341-1.054.564-1.964.564-1.573 0-2.292-.337-2.657-.75-.192-.218-.331-.506-.423-.89-.091-.385-.135-.867-.135-1.472 0-1.14.243-1.847.705-2.32.477-.487 1.319-.861 2.824-1.024 1.487-.16 2.192.138 2.533.529l.008.01c.264.308.429.806.43 1.568v.031a7.203 7.203 0 01-.09 1.079c-.143.967-.406 1.754-.851 2.301zm2.504-2.497a7.174 7.174 0 01-.063-.894v-.02c.001-.77.17-1.27.438-1.578.341-.39 1.046-.69 2.533-.529 1.506.163 2.347.537 2.824 1.025.462.472.705 1.179.705 2.319 0 1.21-.174 1.926-.558 2.361-.365.414-1.084.751-2.657.751-1.21 0-1.902-.393-2.344-.938-.475-.584-.742-1.44-.878-2.497z"
                  ></path>
                </svg>
              </Icon>
            </IconContainer>
            <div>
              <DropdownHeading>Copilot</DropdownHeading>
              <DropdownSubHeading>Write better code with AI</DropdownSubHeading>
            </div>
          </DropdownLeftItem>
          <DropdownLeftItem>
            <IconContainer>
              <Icon>
                <svg height="24" viewBox="0 0 24 24" width="24">
                  <path d="M10.3 6.74a.75.75 0 01-.04 1.06l-2.908 2.7 2.908 2.7a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 011.06.04zm3.44 1.06a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.908-2.7-2.908-2.7z"></path>
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 01-1.75 1.75h-9.69l-3.573 3.573A1.457 1.457 0 015 21.043V18.5H3.25a1.75 1.75 0 01-1.75-1.75V4.25zM3.25 4a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 01.75.75v3.19l3.72-3.72a.75.75 0 01.53-.22h10a.25.25 0 00.25-.25V4.25a.25.25 0 00-.25-.25H3.25z"
                  ></path>
                </svg>
              </Icon>
            </IconContainer>
            <div>
              <DropdownHeading>Code review</DropdownHeading>
              <DropdownSubHeading>Manage code changes</DropdownSubHeading>
            </div>
          </DropdownLeftItem>
          <DropdownLeftItem>
            <IconContainer>
              <Icon>
                <svg height="24" viewBox="0 0 24 24" width="24">
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 13a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
              </Icon>
            </IconContainer>
            <div>
              <DropdownHeading>Issues</DropdownHeading>
              <DropdownSubHeading>Plan and track work</DropdownSubHeading>
            </div>
          </DropdownLeftItem>
          <DropdownLeftItem>
            <IconContainer>
              <Icon>
                <svg height="24" viewBox="0 0 24 24" width="24">
                  <path
                    fillRule="evenodd"
                    d="M1.75 1A1.75 1.75 0 000 2.75v9.5C0 13.216.784 14 1.75 14H3v1.543a1.457 1.457 0 002.487 1.03L8.061 14h6.189A1.75 1.75 0 0016 12.25v-9.5A1.75 1.75 0 0014.25 1H1.75zM1.5 2.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v9.5a.25.25 0 01-.25.25h-6.5a.75.75 0 00-.53.22L4.5 15.44v-2.19a.75.75 0 00-.75-.75h-2a.25.25 0 01-.25-.25v-9.5z"
                  ></path>
                  <path d="M22.5 8.75a.25.25 0 00-.25-.25h-3.5a.75.75 0 010-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0122.25 20H21v1.543a1.457 1.457 0 01-2.487 1.03L15.939 20H10.75A1.75 1.75 0 019 18.25v-1.465a.75.75 0 011.5 0v1.465c0 .138.112.25.25.25h5.5a.75.75 0 01.53.22l2.72 2.72v-2.19a.75.75 0 01.75-.75h2a.25.25 0 00.25-.25v-9.5z"></path>
                </svg>
              </Icon>
            </IconContainer>
            <div>
              <DropdownHeading>Discussions</DropdownHeading>
              <DropdownSubHeading>
                Collaborate outside of code
              </DropdownSubHeading>
            </div>
          </DropdownLeftItem>

          <DropdownSection>
            <DropdownHeading>Explore</DropdownHeading>
            <DropdownContent>
              <DropdownContentItem>
                <DropdownContentLink>All features</DropdownContentLink>
              </DropdownContentItem>
              <DropdownContentItem>
                <DropdownContentLink>Documentation</DropdownContentLink>
              </DropdownContentItem>
              <DropdownContentItem>
                <DropdownContentLink>GitHub Skills</DropdownContentLink>
              </DropdownContentItem>
              <DropdownContentItem>
                <DropdownContentLink>Blog</DropdownContentLink>
              </DropdownContentItem>
            </DropdownContent>
          </DropdownSection>
        </>
      )}
    </NavItem>
  );
};

const Solutions = ({ isOpen, handleClick, i }) => {
  return (
    <NavItem onClick={() => handleClick(i)}>
      <NavItemHeaderContainer>
        <DropdownTitle>Solutions</DropdownTitle>
        <DropdownIconContainer>{ChevronDownSVG}</DropdownIconContainer>
      </NavItemHeaderContainer>
      {isOpen && (
        <Dropdown>
          <DropdownSection>
            <DropdownHeading>By Plan</DropdownHeading>
            <DropdownContent>
              <DropdownContentItem>
                <DropdownContentLink>Enterprise</DropdownContentLink>
              </DropdownContentItem>
              <DropdownContentItem>
                <DropdownContentLink>Teams</DropdownContentLink>
              </DropdownContentItem>
              <DropdownContentItem>
                <DropdownContentLink>Compare all</DropdownContentLink>
              </DropdownContentItem>
            </DropdownContent>
          </DropdownSection>

          <DropdownSection>
            <DropdownHeading>By Solution</DropdownHeading>
            <DropdownContent>
              <DropdownContentItem>
                <DropdownContentLink>CI/CD & Automation</DropdownContentLink>
              </DropdownContentItem>
              <DropdownContentItem>
                <DropdownContentLink>DevOps</DropdownContentLink>
              </DropdownContentItem>
              <DropdownContentItem>
                <DropdownContentLink>DevSecOps</DropdownContentLink>
              </DropdownContentItem>
            </DropdownContent>
          </DropdownSection>

          <DropdownSection>
            <DropdownHeading>Case Studies</DropdownHeading>
            <DropdownContent>
              <DropdownContentItem>
                <DropdownContentLink>Customer Stories</DropdownContentLink>
              </DropdownContentItem>
              <DropdownContentItem>
                <DropdownContentLink>Resources</DropdownContentLink>
              </DropdownContentItem>
            </DropdownContent>
          </DropdownSection>
        </Dropdown>
      )}
    </NavItem>
  );
};

const OpenSource = ({ isOpen, handleClick, i }) => {
  return (
    <NavItem onClick={() => handleClick(i)}>
      <NavItemHeaderContainer>
        <DropdownTitle>Open Source</DropdownTitle>
        <DropdownIconContainer>{ChevronDownSVG}</DropdownIconContainer>
      </NavItemHeaderContainer>
      {isOpen && (
        <Dropdown>
          <DropdownSection>
            <DropdownContent>
              <DropdownTitleContent>
                <DropdownHeading>GitHub Sponsors</DropdownHeading>
                <DropdownSubHeading>
                  Fund open source developers
                </DropdownSubHeading>
              </DropdownTitleContent>
            </DropdownContent>
          </DropdownSection>
          <DropdownSection>
            <DropdownContent>
              <DropdownTitleContent>
                <DropdownHeading>The ReadME Project</DropdownHeading>
                <DropdownSubHeading>
                  GitHub community articles
                </DropdownSubHeading>
              </DropdownTitleContent>
            </DropdownContent>
          </DropdownSection>
          <DropdownSection>
            <DropdownHeading>Repositories</DropdownHeading>
            <DropdownContent>
              <DropdownContentItem>
                <DropdownContentLink>Topics</DropdownContentLink>
              </DropdownContentItem>
              <DropdownContentItem>
                <DropdownContentLink>Trending</DropdownContentLink>
              </DropdownContentItem>
              <DropdownContentItem>
                <DropdownContentLink>Collections</DropdownContentLink>
              </DropdownContentItem>
            </DropdownContent>
          </DropdownSection>
        </Dropdown>
      )}
    </NavItem>
  );
};

const Pricing = ({ isOpen, handleClick, i }) => {
  return (
    <NavItem onClick={() => handleClick(i)}>
      <NavItemHeaderContainer>
        <DropdownTitle>Pricing</DropdownTitle>
      </NavItemHeaderContainer>
    </NavItem>
  );
};

export default MobileDropdown;
