import { styled } from "styled-components";
import { MdBusiness, MdEmail, MdFax, MdKeyboardArrowDown, MdLocationOn, MdPhone } from "react-icons/md";
const FooterBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 360px 0px 360px;
  @media screen and (max-width: 1600px) {
    padding: 0px 200px 0px 200px;
  }
  @media screen and (max-width: 1300px) {
    padding: 0px 100px 0px 100px;
  }
  @media screen and (max-width: 1200px) {
    padding: 0px 50px 0px 50px;
  }
  @media screen and (max-width: 1000px) {
    padding: 0px;
  }
`
const FooterNav = styled.div`
  width: 100%;
  height: fit-content;
  border-bottom: 2.5px solid #ddd;
  padding: 8px 10px 8px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .itembox {
    width: fit-content;
    height: fit-content;
    display: flex;
    .item {
      width: fit-content;
      height: fit-content;
      font-size: 14px;
      font-weight: bold;
      margin-right: 15px;
      cursor: pointer;
    }
    @media screen and (max-width: 900px) {
      display: inline-block;
      max-width: 350px;
      .item {
        display: inline-flex;
        width: 50%;
        height: fit-content;
        justify-content: center;
        align-items: center;
        margin: 0;
        box-shadow: 0px 0px 1px 0px rgb(0, 0, 0, 0.5);
        background-color: #eee;
        padding: 8px 0px 8px 0px;
        border-radius: 2px;
      }
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 15px 0px 15px 0px;
    /* border: none; */
  }
`
const FamilyBox = styled.div`
  width: fit-content;
  height: fit-content;
  border-bottom: 2px solid black;
  padding: 0px 0px 2px 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    cursor: pointer;
    font-size: 20px;
    margin: 0px 0px 0px 2px;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`
const InfoBox = styled.div`
  padding: 10px 10px 10px 10px;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 250px;
  }
  .textbox {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    .item {
      display: inline-flex;
      align-items: center;
      .icon {
        font-size: 16px;
        color: rgb(0, 75, 155);
        margin-right: 5px;
      }
      span {
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.5px;
      }
    }
  }
  .imgbox {
    img {
      margin-left: 8px;
    }
    .mark1 {
      width: 70px;
    }
    .mark2 {
      width: 50px;
    }
    .mark3, .mark4 {
      width: 52px;
    }
    .mark5 {
      width: 39px;
    }
    .mark6 {
      width: 70px;
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 10px 0px 10px 0px;
    .textbox {
      margin: 3px 0px 0px 0px;
    }
    .imgbox {
      scale: 0.68;
      img {
        margin-left: 5px;
      }
    }
  }
`
const Copyright = styled.div`
  width: 100%;
  height: fit-content;
  background-color: rgb(0, 75, 155);
  color: #eee;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  padding: 3px 0px 3px 0px;
`
const Footer = () => {
  return (
    <>
      <FooterBox>
        <FooterNav>
          <div className="itembox">
            <div className="item">회사소개</div>
            <div className="item">제품소개</div>
            <div className="item">고객지원</div>
            <div className="item">채용안내</div>
            <div className="item">찾아오시는길</div>
            <div className="item">개인정보처리방침</div>
          </div>
          <FamilyBox>Family Site<MdKeyboardArrowDown className="icon"/></FamilyBox>
        </FooterNav>
        <InfoBox>

          <img className="logo" src={process.env.PUBLIC_URL + '/mobilelogo.png'} alt="logo" />

          <div className="textbox">
            <div className="item">
              <MdBusiness className="icon" />
              <span>유진기공산업(주) 대표이사 이재영</span>
            </div>
            <div className="item">
              <MdLocationOn className="icon" />
              <span>경기 안산시 단원구 산단로 242</span>
            </div>
            <div className="item">
              <MdPhone className="icon" />
              <span>031-489-6500&nbsp;|&nbsp;</span>
              <MdFax className="icon" />
              <span>031-489-6229</span>
            </div>
            <div className="item">

            </div>
            <div className="item">
              <MdEmail className="icon" />
              <span>webmaster@yujinltd.co.kr</span>
            </div>
          </div>
          <div className="imgbox">
            <img className="mark1" src={process.env.PUBLIC_URL + '/footer/m1.png'} alt="logo" />
            <img className="mark2" src={process.env.PUBLIC_URL + '/footer/m2.png'} alt="logo" />
            <img className="mark3" src={process.env.PUBLIC_URL + '/footer/m3.png'} alt="logo" />
            <img className="mark4" src={process.env.PUBLIC_URL + '/footer/m4.png'} alt="logo" />
            <img className="mark5" src={process.env.PUBLIC_URL + '/footer/m5.png'} alt="logo" />
            <img className="mark6" src={process.env.PUBLIC_URL + '/footer/m6.png'} alt="logo" />
          </div>
        </InfoBox>

      </FooterBox>
      <Copyright>Copyright 2023 YUJIN Machinery Ltd. All Rights Reserved.</Copyright>
    </>

  )
};

export default Footer;