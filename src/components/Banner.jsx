import styled from 'styled-components'
import colors from '../utils/colors';

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 63px;
  border-radius: 25px;
  height: 223px;
  background-color: ${colors.black};
  overflow: hidden;
  position: relative;
  @media (max-width: 1024px) {
    height: 111px;
    margin-top: 20px;
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  opacity: 0.7;
`;

const P = styled.p`
  position: absolute;
  color: ${colors.white};
  font-size: 48px;
  font-weight: 500;
  @media (max-width: 1024px) {
    font-size: 24px;
    margin-left: 16px;
  }
`;

function Banner({backgroundImage, title}) {
    return (
      <div>
        <BannerContainer>
          <Img src={backgroundImage} alt='Background banner'/>
          {title && <P>Chez vous, partout et ailleurs</P>}
        </BannerContainer>
      </div>
    )
}

export default Banner
