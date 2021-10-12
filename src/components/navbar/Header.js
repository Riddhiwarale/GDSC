import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import { ReactComponent as Logo } from "assets/svg/Navbar/Logo.svg";
import { ReactComponent as ThemeBtn } from "assets/svg/Navbar/ThemeBtn.svg";
import { ReactComponent as Menu } from "assets/svg/Navbar/Menu.svg";
import { ReactComponent as Close } from "assets/svg/Navbar/Close.svg";
import { ReactComponent as GDSC } from "assets/svg/Navbar/navlogo.svg";
import { motion } from "framer-motion";
import useAnimatedNavToggler from "assets/helper/NavToggler";

const Container = tw.header` justify-between items-center w-full mx-auto`;
const NavLink = tw.a``;
// const NavLinks = tw.div`inline-block h-full`;
const NavLinkCon = tw.span`text-lg my-2 lg:text-sm lg:mx-6 lg:my-0  font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent  text-gray-faint hover:border-blue-core hocus:text-blue-core cursor-pointer`;
const ThemeBtnCon = styled.button`
  ${tw`h-5`}
  svg {
    ${tw`h-full`}
  }
`;
const DesktopNavLinks = tw.nav`hidden lg:flex flex-1 justify-around items-center h-16 shadow `;
const LogoCon = styled.a`
  svg {
    ${tw`h-8`}
  }
  @media (min-width: 1024px) {
    svg {
      width: 100%;
      max-width: 16rem;
    }
  }
`;
const SideCon = tw.div` flex justify-center items-center h-full`;

const MobileNavLinksContainer = tw.nav`lg:hidden flex  px-6 sm:px-8 h-16 flex-1 items-center justify-between`;

const NavToggle = tw.button`
  lg:hidden z-40  focus:outline-none hover:text-blue-core transition duration-300
`;
const MobileNavLinks = motion(styled.div`
  ${tw`hidden   z-10 shadow-2xl absolute -top-3 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-faint bg-white`}
  span {
    ${tw`flex flex-col items-center`}
  }
`);

export const Header = () => {
  const LeftLinks = [
    <>
      {/* <NavLinkCon>
        <NavLink className="text-white">|||||</NavLink>
      </NavLinkCon> */}
      <NavLinkCon>
        <NavLink>Home</NavLink>
      </NavLinkCon>
      <NavLinkCon>
        <NavLink>Our Team</NavLink>
      </NavLinkCon>
      <NavLinkCon>
        <NavLink>Events</NavLink>
      </NavLinkCon>
      <NavLinkCon>
        <NavLink>Resources</NavLink>
      </NavLinkCon>
      <NavLinkCon>
        <NavLink>Partner With Us</NavLink>
      </NavLinkCon>
      <NavLinkCon>
        <NavLink>Contact Us</NavLink>
      </NavLinkCon>
    </>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();

  const collapseBreakpointCss = collapseBreakPointCssMap["lg"];

  return (
    <Container>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        <LogoCon>
          <Logo />
        </LogoCon>
        <SideCon> {LeftLinks}</SideCon>
      </DesktopNavLinks>

      <MobileNavLinksContainer
        css={`
          ${collapseBreakpointCss.mobileNavLinksContainer}
        `}
      >
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          <span>{LeftLinks}</span>
        </MobileNavLinks>
        <div className="flex items-center">
          <GDSC className="h-6 w-8 mr-2" />
          GDSC
        </div>

        <div className="flex  items-center">
          <ThemeBtnCon tw="z-0">
            <ThemeBtn />
          </ThemeBtnCon>
          <NavToggle
            onClick={toggleNavbar}
            className={showNavLinks ? "open" : "closed"}
          >
            {showNavLinks ? <Close tw="w-6 h-6" /> : <Menu tw="w-6 h-6" />}
          </NavToggle>
        </div>
      </MobileNavLinksContainer>
    </Container>
  );
};
const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};
