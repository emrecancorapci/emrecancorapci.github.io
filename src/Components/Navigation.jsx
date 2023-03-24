/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { useActive } from '../Contexts/ActiveContext';

const sugarNice = `
color: rgb(255, 46, 99) !important;
&:hover {
  color: rgb(8, 217, 214) !important;
}
`;

const Collapser = styled.h1`
  cursor: pointer;
`;

const Menu = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  max-height: 0;
  &.active {
    max-height: 200px;
  }
`;

const AwwwsomeIcon = styled(FontAwesomeIcon)`
  ${sugarNice}
`;

const AwwwsomeLogo = styled(FontAwesomeIcon)`
  padding: 0 0.5rem;
  ${sugarNice}
`;

const Title = styled.h1`
  font-size: 3.7rem !important;
  font-weight: 700 !important;
  line-height: 5rem;
  ${sugarNice}
`;

const MenuItem = styled.h2`
  ${sugarNice}
`;

const Link = styled.p`
  cursor: pointer;
  ${sugarNice}
`;

function Navigation() {
  const [active, setActive] = useState(false);
  const { setActivePage } = useActive();
  return (
    <>
      <div className="col">
        <div className="container pt-3 pb-1">
          <div className="row align-items-center">
            <Link className="col text-center" to=".\">
              <Title>EMRE CAN ÇORAPÇI</Title>
            </Link>
            <div className="col-auto h-100">
              <Collapser onClick={() => setActive(!active)}>
                <AwwwsomeIcon icon={faBars} size="xl" />
              </Collapser>
            </div>
          </div>
        </div>
      </div>
      <Menu className={`bg-darker ${active ? 'active' : ''}`}>
        <div className="container my-2 mt-3">
          <div className="row justify-content-between">
            <div className="col-auto">
              {/* TODO: Needs refactoring */}
              <Link
                className="row"
                onClick={() => {
                  setActive(!active);
                  setActivePage('Home');
                }}
              >
                <MenuItem className="col-auto">HOME</MenuItem>
              </Link>
              <Link
                className="row"
                onClick={() => {
                  setActive(!active);
                  setActivePage('Projects');
                }}
              >
                <MenuItem className="col-auto">PROJECTS</MenuItem>
              </Link>
              <Link
                className="row"
                onClick={() => {
                  setActive(!active);
                  setActivePage('ContactMe');
                }}
              >
                <MenuItem className="col-auto">CONTACT ME</MenuItem>
              </Link>
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
