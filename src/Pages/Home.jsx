import styled from 'styled-components';

import SkillCard from '../Components/Home/SkillCard';

const Animated = styled.div`
  transition: all 0.5s ease-out;
`;

const IceBackground = styled.div`
  background-color: rgb(8, 217, 214);
  display: flex;
  align-items: center;
`;

const SugarBackground = styled.div`
  background-color: rgb(255, 46, 99);
  display: flex;
  align-items: center;
`;

const Sugar = styled.span`
  color: rgb(255, 46, 99);
`;

const Shadow = styled.p`
  text-shadow: 0.1em 0.1em 0 rgba(0, 0, 0, 0.9);
`;


function Home() {
  return (
    <>
      <Animated className="container">
        <div className="row">
          <div className="col">
            <div className="row my-4">
              <div className="col">
                <p className="h07 text-center text-white">Hello! I&apos;m a Software Developer from Turkey</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <p className="h09p text-center text-white">
                  I love to create things, from <Sugar>songs</Sugar> to
                  <Sugar> web applications</Sugar>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Animated>
      <Animated className="container-fluid bg-black my-4">
        <div className="row flex-wrap justify-content-around">
          <IceBackground className="col-12 col-xl-4 col-lg-6 order-1 order-xl-0 order-lg-1 p-4">
            <Shadow className="h12p text-center text-white">
              I have interest in philosophy, psychology, video games, art, popular science, movies, podcasts, music
              production and blogging.
            </Shadow>
          </IceBackground>
          <SugarBackground className="col-12 col-xl-4 col-lg-12 col-md-12 order-0 order-xl-1 order-lg-0 p-4">
            <Shadow className="h11p text-center text-white">
              I&apos;m currently working as Co-Founder and Frontend Developer at an enterprise called EneftimBu. Also
              I&apos;m a Volunteer Frontend Developer at Gelecek Bilimde.
            </Shadow>
          </SugarBackground>
          <IceBackground className="col-12 col-xl-4 col-lg-6 col-md-12 order-2 p-4">
            <Shadow className="h12p text-center text-white">
              I&apos;m also a guitarist, vocalist and songwriter. I&apos;ve been playing guitar for 10 years and writing
              songs for 5 years.
            </Shadow>
          </IceBackground>
        </div>
      </Animated>
      <Animated className="container">
        <div className="row my-2 mt-4">
          <div className="col">
            <p className="h09 text-center text-white">Technologies I used:</p>
          </div>
        </div>
      </Animated>
      <div className="container-fluid bg-black p-3">
        <div className="row flex-wrap justify-content-center">
          <div className="col-11 col-xl-5 col-lg-8 col-md-8 col-sm-11 px-3 py-1">
            <SkillCard>ENTITY FRAMEWORK</SkillCard>
          </div>
          <div className="col-11 col-xl-2 col-lg-4 col-md-4 col-sm-11 px-3 py-1">
            <SkillCard>.NET</SkillCard>
          </div>
          <div className="col-11 col-xl-3 col-lg-6 col-md-6 col-sm-11 px-3 py-1">
            <SkillCard>EXPRESS.JS</SkillCard>
          </div>
          <div className="col-11 col-xl-2 col-lg-6 col-md-6 col-sm-11 px-3 py-1">
            <SkillCard>NODE.JS</SkillCard>
          </div>
          <div className="col-11 col-xl-4 col-lg-5 col-md-5 col-sm-11 px-3 py-1">
            <SkillCard>SVELTE KIT</SkillCard>
          </div>
          <div className="col-11 col-xl-2 col-lg-4 col-md-4 col-sm-11 px-3 py-1">
            <SkillCard>REACT</SkillCard>
          </div>
          <div className="col-11 col-xl-2 col-lg-3 col-md-3 col-sm-11 px-3 py-1">
            <SkillCard>GIT</SkillCard>
          </div>
          <div className="col-11 col-xl-4 col-lg-5 col-md-5 col-sm-11 px-3 py-1">
            <SkillCard>BOOTSTRAP</SkillCard>
          </div>
          <div className="col-11 col-xl-3 col-lg-4 col-md-4 col-sm-11 px-3 py-1">
            <SkillCard>MONGODB</SkillCard>
          </div>
          <div className="col-11 col-xl-2 col-lg-3 col-md-3 col-sm-11 px-3 py-1">
            <SkillCard>MSSQL</SkillCard>
          </div>
          <div className="col-11 col-xl-4 col-lg-5 col-md-5 col-sm-11 px-3 py-1">
            <SkillCard>POSTGRESQL</SkillCard>
          </div>
          <div className="col-11 col-xl-3 col-lg-5 col-md-5 col-sm-11 px-3 py-1">
            <SkillCard>POSTMAN</SkillCard>
          </div>
          <div className="col-11 col-xl-2 col-lg-2 col-md-2 col-sm-11 px-3 py-1">
            <SkillCard>C#</SkillCard>
          </div>
          <div className="col-11 col-xl-4 col-lg-5 col-md-5 col-sm-11 px-3 py-1">
            <SkillCard>JAVASCRIPT</SkillCard>
          </div>
          <div className="col-11 col-xl-4 col-lg-5 col-md-5 col-sm-11 px-3 py-1">
            <SkillCard>TYPESCRIPT</SkillCard>
          </div>
          <div className="col-11 col-xl-2 col-lg-2 col-md-2 col-sm-11 px-3 py-1">
            <SkillCard>C++</SkillCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
