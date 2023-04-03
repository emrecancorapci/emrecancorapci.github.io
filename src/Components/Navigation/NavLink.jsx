import styled from 'styled-components';
import { useActive } from '../../Contexts/ActiveContext';

const Link = styled.a`
  cursor: pointer;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  color: rgb(255, 46, 99) !important;

  :hover {
    color: rgb(8, 217, 214) !important;
  }
`;

export default function NavLink({ children: text, to }) {
  const { setActivePage } = useActive();

  const link = to || text.toLowerCase();

  return <Link onClick={() => setActivePage(link)}>{text}</Link>;
}
