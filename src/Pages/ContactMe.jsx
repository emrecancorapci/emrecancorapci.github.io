import styled from 'styled-components';

import Form from '../Components/ContactMe/Form';

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff !important;
  text-align: center;

  text-shadow: 0.1em 0.1em 0 rgb(0, 0, 0);
`;

const Container = styled.div`
  min-height: 74vh;
`;

export default function ContactMe() {
  return (
    <Container className="container my-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-auto mb-4">
          <Title>CONTACT ME</Title>
        </div>
      </div>
      <div className="row justify-content-center">
        <Form className="col" />
      </div>
    </Container>
  );
}
