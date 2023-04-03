import styled from 'styled-components';

const CardOneBottom = styled.div`
  height: 97%;
  background-color: rgb(8, 217, 214);
`;

const CardOneTop = styled.div`
  background-color: rgb(255, 46, 99);
  margin: 0;
  transition: margin 0.2s ease-out;

  :hover {
    margin: -8px 0px 8px -8px;
  }
`;

function Card({ children }) {
  return (
    <CardOneBottom className="row my-2 mx-4">
      <CardOneTop className="col">{children}</CardOneTop>
    </CardOneBottom>
  );
}

export default Card;
