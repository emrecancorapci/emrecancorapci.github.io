import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

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

const Shadow = styled.p`
  text-shadow: 0.1em 0.1em 0 rgba(0, 0, 0, 0.9);
`;
function SummaryPanel() {
  return (
    <div className="row flex-wrap justify-content-around">
      <IceBackground className="col-12 col-xl-4 col-lg-6 order-1 order-xl-0 order-lg-1 p-4">
        <Shadow className="h12p text-center text-white">
          I have interest in philosophy, psychology, video games, art, popular science, movies, podcasts, music
          production and blogging.
        </Shadow>
      </IceBackground>
      <SugarBackground className="col-12 col-xl-4 col-lg-12 col-md-12 order-0 order-xl-1 order-lg-0 p-4 py-5">
        {/* <FontAwesomeIcon icon={faFire} size="3x" className="text-white" /> */}
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
  );
}

export default SummaryPanel;
