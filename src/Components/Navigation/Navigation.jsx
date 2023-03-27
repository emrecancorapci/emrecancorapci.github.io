/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { useActive } from '../../Contexts/ActiveContext';

import NavLink from './NavLink';

const sugarNice = `
color: rgb(255, 46, 99) !important;
&:hover {
  color: rgb(8, 217, 214) !important;
}
`;

const Menu = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  max-height: 0;
  &.active {
    max-height: 15rem;
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
    <>
      <div className="container pt-3 pb-1">
        <div className="row align-items-center">
          <Title className="col text-center">EMRE CAN ÇORAPÇI</Title>
          <div className="col-auto h-100 mb-4">
            <AwwwsomeIcon icon={faBars} size="xl" onClick={() => setActive(!active)} />
          </div>
        </div>
      </div>
      <Menu className={`bg-darker ${active ? 'active' : ''}`}>
        <div className="container my-2 mt-3">
          <div className="row justify-content-between">
            <div className="col">
              <NavLink>HOME</NavLink>
              <NavLink>PROJECTS</NavLink>
              <NavLink>CONTACT ME</NavLink>
            </div>
            <div className="col-auto">
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
    </>
  );
}

export default Navigation;
