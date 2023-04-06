import styled from 'styled-components';
import { useActive } from '../../Contexts/ActiveContext';

const Link = styled.button`
  cursor: pointer;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  text-decoration: none;
  text-align: left;

  padding: 0;
  color: rgb(255, 46, 99) !important;

  :hover {
    color: rgb(8, 217, 214) !important;
  }
`;

export default function NavLink({ children: text, to }) {
  const { setActivePage } = useActive();

  const link = to || text.toLowerCase();

  return (
    <Link className="btn btn-link" onClick={() => setActivePage(link)}>
      {text}
    </Link>
  );
}
