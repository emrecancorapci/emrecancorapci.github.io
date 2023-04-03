/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import useScroll from '../Hooks/useScroll';
import { useActive } from '../Contexts/ActiveContext';

import NavLink from './Navigation/NavLink';

const sugarNice = `
color: rgb(255, 46, 99) !important;
&:hover {
  color: rgb(8, 217, 214) !important;
}
`;

const Nav = styled.div`
  background: rgba(0, 0, 0, 0.8);

  backdrop-filter: blur(0.5rem);
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  max-height: 0;
  &.active {
    @media (min-width: 768px) {
      max-height: 300px;
    }
    @media (max-width: 767px) {
      max-height: 360px;
    }
  }
`;

const Menu = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  max-height: 0;
  &.active {
    max-height: 180px;
  }
`;

const Title = styled.h1`
  font-size: 3.7rem !important;
  font-weight: 700 !important;
  line-height: 5rem;
  ${sugarNice}
`;

const AwwwsomeIcon = styled(FontAwesomeIcon)`
  ${sugarNice}
  font-size: 3.5rem;
  cursor: pointer;
`;

const AwwwsomeLogo = styled(FontAwesomeIcon)`
  padding: 0 0.5rem;
  ${sugarNice}
`;

/**
 * Navigation component
 * @description This component is the navigation bar of the app. It contains the navigation links and the menu button.
 * @return {JSX.Element} Navigation
 */

function Navigation() {
  const [showNav, setShowNav] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const { activePage } = useActive();
  const { scrollY, isScrollingDown } = useScroll();

  useEffect(() => {
    setShowMenu((visibility) => !visibility);
  }, [activePage]);

  useEffect(() => {
    const isVisible = !isScrollingDown || scrollY < 50;
    setShowNav(isVisible);
    setShowMenu(false);
  }, [scrollY, isScrollingDown]);

  return (
    <Nav className={showNav && 'active'}>
      <div className="container pt-2 pb-1">
        <div className="row align-items-center">
          <Title className="col text-center">EMRE CAN ÇORAPÇI</Title>
          <div className="col-auto h-100 mb-2">
            <AwwwsomeIcon icon={faBars} size="xl" onClick={() => setShowMenu(!showMenu)} />
          </div>
        </div>
      </div>
      <Menu className={showMenu ? 'active' : ''}>
        <div className="container my-3 mb-4">
          <div className="row justify-content-between px-2">
            <div className="nav col-auto flex-column px-0">
              <NavLink>HOME</NavLink>
              <NavLink>PROJECTS</NavLink>
              <NavLink>CONTACT ME</NavLink>
            </div>
            <div className="col-auto pt-1 px-0">
              <a href="mailto:emrecancorapci@gmail.com" target="_blank" rel="noopener noreferrer">
                <AwwwsomeLogo icon={faEnvelope} size="2xl" />
              </a>
              <a href="https://github.com/emrecancorapci" target="_blank" rel="noopener noreferrer">
                <AwwwsomeLogo icon={faGithub} size="2xl" />
              </a>
              <a href="https://www.linkedin.com/in/emrecancorapci/" target="_blank" rel="noopener noreferrer">
                <AwwwsomeLogo icon={faLinkedin} size="2xl" />
              </a>
            </div>
          </div>
        </div>
      </Menu>
    </Nav>
  );
}

export default Navigation;
