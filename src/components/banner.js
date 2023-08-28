import { styled } from "styled-components";

const BannerBox = styled.div`
  width: 100%;
  height: 80vh;
  background-color: rgb(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  padding-top: 150px;
  padding-left: 10vw;
  @media screen and (max-width: 600px) {
    padding-left: 0;
    align-items: center;
  }
`
const TopTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    font-size: 22px;
  }
`
const MiddleTitle = styled.span`
  font-size: 15px;
  font-weight: lighter;
  color: #fff;
  &.mb {
    margin-bottom: 4px;
  }
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`

const BottomTitle = styled.span`
  font-size: 26px;
  font-weight: bold;
  color: #fff;
  margin-top: 50px;
  .edge {
    color: rgb(0, 75, 155);
    filter: brightness(1.5);
  }
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`
const Banner = () => {
  return (
    <BannerBox>
      <TopTitle>유진의 도전 속에 무한한 미래가 있습니다</TopTitle>
      <MiddleTitle className="mb">국내 최대의 철도차량 부품 전문업체로서의 자부심과 긍지를 가지고</MiddleTitle>
      <MiddleTitle>세계 철도차량 부품산업의 주역으로 당당히 설 수있도록 끊임없이 노력하겠습니다</MiddleTitle>
      <BottomTitle>Infinite Future In the Challenge of <span className="edge">YUJIN</span></BottomTitle>
    </BannerBox>
  )
};

export default Banner;