import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const sugar = 'rgb(255, 46, 99)';
const ice = 'rgb(8, 217, 214)';

const sugarNice = `
color: ${sugar} !important;
&:hover {
  color: ${ice} !important;
}
`;

const Collapser = styled.h1`
  cursor: pointer;
`;

const Menu = styled.div`
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  max-height: 0;
  &.active {
    max-height: 400px;
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
  ${sugarNice}
`;

const MenuItem = styled.h2`
  ${sugarNice}
`;

function Navigation() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="col">
        <div className="container pt-3 pb-1">
          <div className="row align-content-end">
            <Link className="col text-center" to=".\">
              <Title>EMRE CAN ÇORAPÇI</Title>
            </Link>
            <div className="col-auto">
              <Collapser onClick={() => setActive(!active)}>
                <AwwwsomeIcon icon={faBars} />
              </Collapser>
            </div>
          </div>
        </div>
      </div>
      <Menu className={`bg-darker ${active ? 'active' : ''}`}>
        <div className="container my-2 mt-3">
          <div className="row justify-content-between">
            <div className="col-auto">
              <Link className="row" to="Projects">
                <MenuItem className="col-auto">PROJECTS</MenuItem>
              </Link>
              <Link className="row" to="Contact">
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
