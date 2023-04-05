import styled from 'styled-components';

import SkillsSection from '../Components/Home/SkillsSection';
import SummaryPanel from '../Components/Home/SummaryPanel';

const Animated = styled.div`
  transition: all 0.5s ease-out;
`;

const Sugar = styled.span`
  color: rgb(255, 46, 99);
`;

const Main = styled.div`
  min-height: 88vh;
`;

function Home() {
  return (
    <>
      <Animated className="container">
        <Main className="row align-items-center my-5">
          <div className="col">
            <div className="row mb-5">
              <div className="col">
                <p className="h07 text-center text-white">Hello! I&apos;m a Software Developer from Turkey</p>
              </div>
            </div>
            <div className="row">
              <div className="col mt-5">
                <p className="h09p text-center text-white">
                  I love to create things, from <Sugar>songs</Sugar> to
                  <Sugar> web applications</Sugar>.
                </p>
              </div>
            </div>
          </div>
        </Main>
      </Animated>
      <Animated className="container-fluid bg-black my-4">
        <SummaryPanel />
      </Animated>
      <Animated className="container">
        <div className="row mt-4 mb-2">
          <div className="col">
            <p className="h09 text-center text-white">Technologies I used:</p>
          </div>
        </div>
      </Animated>
      <div className="container-fluid bg-black p-3">
        <SkillsSection />
      </div>
    </>
  );
}

export default Home;
