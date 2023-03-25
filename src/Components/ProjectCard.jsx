/* eslint-disable no-irregular-whitespace */
import styled from 'styled-components';

const CardTitle = styled.h1`
  font-size: 3.5rem !important;
  font-weight: 700 !important;
  line-height: 3.5rem;
  color: black !important;
`;

const TechWhite = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  color: white;
`;

const TechBlack = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  color: black;
`;

const SourceText = styled.a`
  display: inline-block;
  width: 100%;
  padding: 0.5rem 0.5rem;
  margin: 0 0.5rem;

  text-align: right !important;
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

export default function ProjectCard({ data: { title, technologies, source } }) {
  return (
    <>
      <div className="row p-2">
        <div className="col">
          <CardTitle>{title}</CardTitle>
          {technologies.map((technology, index) =>
            // eslint-disable-next-line prettier/prettier
            (index % 2 === 0
            ? <TechWhite>{technology}​</TechWhite>
            : <TechBlack>{technology}​</TechBlack>)
          )}
        </div>
      </div>

      <div className="row">
        {source ? (
          <SourceBackground>
            <SourceText href={source} target="_blank" rel="noopener noreferrer">
              SOURCE
            </SourceText>
          </SourceBackground>
        ) : null}
      </div>
    </>
  );
}
