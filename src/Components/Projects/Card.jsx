import styled from 'styled-components';

const CardOneBottom = styled.div`
  height: 97%;
  background-color: rgb(8, 217, 214);
`;

const CardOneTop = styled.div`
  background-color: rgb(255, 46, 99);
  margin: -16px 0px 16px -16px;
`;

function Card({ children }) {
  return (
    <CardOneBottom className="row my-2 mx-4">
      <CardOneTop className="col">{children}</CardOneTop>
    </CardOneBottom>
  );
}

export default Card;
