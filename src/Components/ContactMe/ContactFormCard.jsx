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
    <div className="container-fluid p-0 ps-4">
      <CardOneBottom className="row my-2 mx-4">
        <CardOneTop className="col">{children}</CardOneTop>
      </CardOneBottom>
    </div>
  );
}
