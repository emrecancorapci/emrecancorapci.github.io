import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import NavLink from './NavLink';

const Menu = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  max-height: 0;
  &.active {
    max-height: 180px;
  }
`;

const AwwwsomeLogo = styled(FontAwesomeIcon)`
  padding: 0 0.5rem;
  color: rgb(255, 46, 99) !important;
  :hover {
    color: rgb(8, 217, 214) !important;
  }
`;

function CollapsingMenu({ showMenu }) {
  return (
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
  );
}

export default CollapsingMenu;
