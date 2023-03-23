/* eslint-disable no-irregular-whitespace */
import styled from 'styled-components';

const CardOneBottom = styled.div`
  background-color: rgb(8, 217, 214);
`;

const CardOneTop = styled.div`
  background-color: rgb(255, 46, 99);
  margin: -16px 0px 16px -16px;
`;

const CardTitle = styled.h1`
  font-size: 3.5rem !important;
  font-weight: 700 !important;
  line-height: 3.5rem;
  color: black !important;
`;

const WhiteText = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  color: white;
`;

const BlackText = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  color: black;
`;

const SourceText = styled.a`
  font-size: 3rem;
  font-weight: 700;
  line-height: 3rem;
  color: rgb(8, 217, 214) !important;
  &:hover {
    color: rgb(255, 46, 99) !important;
  }
`;

const SourceBackground = styled.p`
  background-color: rgb(255, 46, 99);
  &:hover {
    background-color: rgb(8, 217, 214) !important;
  }
`;

function ProjectCard() {
  return (
    <CardOneBottom className="row my-2 mx-4">
      <CardOneTop className="col p-3">
        <CardTitle>YET ANOTHER BLOG PROJECT</CardTitle>
        <WhiteText>.NET​</WhiteText>
        <BlackText>ENTITY​FRAMEWORK​</BlackText>
        <WhiteText>POSTGRESQL​</WhiteText>
        <BlackText>REACT​</BlackText>
        <WhiteText>BOOTSTRAP​</WhiteText>
        <BlackText>TYPESCRIPT</BlackText>
        <SourceBackground className="px-3 text-end py-2">
          <SourceText
            href="https://github.com/emrecancorapci/YetAnotherBlogProject_Frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            SOURCE
          </SourceText>
        </SourceBackground>
      </CardOneTop>
    </CardOneBottom>
  );
}

export default ProjectCard;
