import { styled } from "styled-components";

const MainItemBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
  position: relative;
  padding-bottom: 50px;
  .head {
    margin: 50px 0px 50px 0px;
    font-size: 26px;
    font-weight: bold;
    font-family: 'NanumBarunGothicBold';
    color: rgb(0, 75, 155);
  }
  .outer {
    display: flex;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
  }
`
const Item = styled.div`
  cursor: pointer;
  max-width: 600px;
  max-height: 600px;
  width: 33.33vw;
  height: 33.33vw;
  padding: 13px 13px 19px 13px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    z-index: 1;
    width: 100%;
    filter: brightness(0.5);
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s;
  }
  &:hover {
    img {
      scale: 1.1;
      filter: brightness(0.7);
    }
    .box {
      box-shadow: 0px 0px 4px 1px rgb(255, 255, 255, 0.5);
    }
  }
  @media screen and (max-width: 1000px) {
    display: inline-flex;
    width: 100vw;
    height: 100vw;
  }
`

const ExtenderBox = styled.div`
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    position: absolute;
    font-size: 26px;
    font-weight: bold;
    color: #fff;
    top: 30%;
  }
  .contenta {
    position: absolute;
    font-size: 14px;
    color: #fff;
    top: 40%;
  }
  .contentb {
    position: absolute;
    font-size: 14px;
    color: #fff;
    top: 45%;
  }
  .box {
    position: absolute;
    top: 60%;
    font-size: 16px;
    font-weight: bold;
    border: 1.5px solid aqua;
    color: #fff;
    padding: 10px 15px 10px 15px;
    border-radius: 2px;
    transition: all 0.3s;
  }
`

const ExtenderTB = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
  overflow: hidden;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    background-color: #fff;
    transition: width 0.5s ease;
  }

  &:hover:before {
    width: 100%;
  }

  &:hover:after {
    width: 100%;
  }

  &:hover:before {
    top: 0;
    left: 0;
  }

  &:hover:after {
    bottom: 0;
    right: 0;
  }
`;
const ExtenderLR = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 0;
    background-color: #fff;
    transition: height 0.5s ease;
  }

  &:hover:before {
    height: 100%;
  }

  &:hover:after {
    height: 100%;
  }

  &:hover:before {
    top: 0;
    right: 0;
  }

  &:hover:after {
    bottom: 0;
    left: 0;
  }
`;


const a = [
  { id: 0, title: '계열사소개', maintext: '유진그룹의', subtext: '계열사를 소개합니다', },
  { id: 0, title: '뉴스센터', maintext: '우리의 새로운', subtext: '소식을 전합니다', },
  { id: 0, title: '채용안내', maintext: '열정가득한 ', subtext: '당신을 기다립니다', },
];

// span:after {
//   display:block;
//   content: '';
//   border-bottom: solid 2.5px rgb(0, 75, 155);  
//   transform: scaleX(0);  
//   transition: transform 0.2s ease-in-out;
// }
// span:hover:after { 
//   transform: scaleX(1);
// }
const MainItem = () => {
  return (
    <MainItemBox>
      <div className="head">GATEWAY</div>
      <div className="outer">
        {
          a.map((item, i) => {
            return (
              <Item>
                <img src={process.env.PUBLIC_URL + '/init' + i + '.png'} />
                <ExtenderBox>
                  <ExtenderTB>
                    <ExtenderLR>
                    </ExtenderLR>
                  </ExtenderTB>
                  <span className="title">{item.title}</span>
                  <span className="contenta">{item.maintext}</span>
                  <span className="contentb">{item.subtext}</span>
                  <span className="box">{item.title} 바로가기</span>
                </ExtenderBox>
              </Item>
            )
          })
        }
      </div>

    </MainItemBox>
  )
};
export default MainItem;