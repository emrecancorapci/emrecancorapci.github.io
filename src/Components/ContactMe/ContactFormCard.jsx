import styled from 'styled-components';

const CardOneBottom = styled.div`
  height: 97%;
  background-color: black;
`;

const CardOneTop = styled.div`
  background-color: rgb(255, 46, 99);
  margin: -16px 0px 16px -16px;
`;

export default function ContactFormCard({ children }) {
  return (
    <CardOneBottom className="row">
      <CardOneTop className="col">{children}</CardOneTop>
    </CardOneBottom>
  );
}
