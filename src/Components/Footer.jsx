import styled from 'styled-components';

const Base = styled.footer`
  background-color: rgb(255, 46, 99);
`;

function Footer() {
  return (
    <Base className="row">
      <div className="col">
        <p className="text-center text-black py-3 mb-0">©2023 Emre Can Çorapçı</p>
      </div>
    </Base>
  );
}

export default Footer;
