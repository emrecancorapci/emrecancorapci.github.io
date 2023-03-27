/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { useActive } from '../Contexts/ActiveContext';

import NavLink from './Navigation/NavLink';

const sugarNice = `
color: rgb(255, 46, 99) !important;
&:hover {
  color: rgb(8, 217, 214) !important;
}
`;

const NavBackground = styled.div`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(0.5rem);
`;

const Menu = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  max-height: 0;
  &.active {
    max-height: 16rem;
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

function Navigation() {
  const [active, setActive] = useState(false);
  const { activePage } = useActive();

  useEffect(() => {
    setActive((menuActive) => !menuActive);
  }, [activePage]);

  return (
    <NavBackground>
      <div className="container pt-2 pb-1">
        <div className="row align-items-center">
          <Title className="col text-center">EMRE CAN ÇORAPÇI</Title>
          <div className="col-auto h-100 mb-2">
            <AwwwsomeIcon icon={faBars} size="xl" onClick={() => setActive(!active)} />
          </div>
        </div>
      </div>
      <Menu className={active ? 'active' : ''}>
        <div className="container my-3 mb-4">
          <div className="row justify-content-between">
            <div className="nav col-auto flex-column">
              <NavLink>HOME</NavLink>
              <NavLink>PROJECTS</NavLink>
              <NavLink>CONTACT ME</NavLink>
            </div>
            <div className="col-auto pt-1">
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
    </NavBackground>
  );
}

export default Navigation;
