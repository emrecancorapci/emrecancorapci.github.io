/* eslint-disable no-irregular-whitespace */
import styled from 'styled-components';

const TextWhite = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  color: white;
`;

const TextBlack = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  color: black;
`;

export default function NoSpaceList({ list }) {
  return list.map((str, index) =>
    // eslint-disable-next-line prettier/prettier
    index % 2 === 0
    ? <TextWhite>{str}​</TextWhite>
    : <TextBlack>{str}​</TextBlack>
  );
}
