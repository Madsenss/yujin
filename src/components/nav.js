import { styled } from "styled-components";
import { MdClose, MdDehaze, MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";

const MainContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  background-color: #fff;
  padding: 0px 0px 10px 0px;
`

const NavContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0px 50px 0px 50px;
  .logo {
    width: 60px;
    cursor: pointer;
    @media screen and (max-width: 1201px) {
      position: absolute;
      width: 240px;
    }
  }
  /* border-top: 3px solid rgb(0, 75, 155); */
  @media screen and (max-width: 1201px) {
    padding: 0px 15px 0px 15px;
    height: 60px;
    justify-content: center;
  }
  transition: 0.75s;
  &.open {
    padding-bottom: 10px;
  }
`

const NavItemBox = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 70px;
`

const NavItem = styled.div`
  width: 150px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 20px 0px 20px;
  cursor: pointer;
  span {
    display: block;
    width: fit-content;
    font-size: 18px;
    font-weight: bold;
  }
  span:hover {
    color: rgb(0, 75, 155); 
  }
  span:after {
    display:block;
    content: '';
    border-bottom: solid 2.5px rgb(0, 75, 155);  
    transform: scaleX(0);  
    transition: transform 0.2s ease-in-out;
  }
  span:hover:after { 
    transform: scaleX(1);
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`
const DropdownBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &.open {
    transition: 1s;
    height: 150px;
    border-top: 3px solid rgb(0, 75, 155);
    opacity: 1;
  }
  &.close {
    transition: 0.75s;
    border-top: 3px solid transparent;
    height: 0px;
    opacity: 0;
  }
`
const DropItem = styled.div`
  width: 150px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 20px 0px 20px;
  transition: all 0.75s;
  .inner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 5px 0px 5px 0px;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bold;
    color: #555;
    &:hover {
      color: #fff;
      background-color: rgb(0, 75, 155);
      border-radius: 3px;
    }
  }
`

const LanguageBox = styled.div`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  /* margin-left: auto; */
  box-shadow: 0px 0px 4px 0.2px rgb(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 6px 4px 6px 8px;
  img {
    width: 28px;
    margin-right: 3px;
    border: 1.5px solid #aaa;
    border-radius: 50%;
  }
  .icon {
    font-size: 18px;
  }
  @media screen and (max-width: 1200px) {
    margin-left: auto;
  }
`
const LanguageItem = styled.div`

`
const SideBarButton = styled.div`
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    font-size: 30px;
  }
  @media screen and (min-width: 1201px) {
    display: none;
  }
`

const Overlay = styled.div`
  z-index: 997;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: rgb(0, 0, 0, 0.7);
  display: ${props => props.dp};
  position: fixed;
`
const SideBar = styled.div`
  z-index: 998;
  position: fixed;
  width: 350px;
  height: calc(var(--vh, 1vh) * 100);
  background-color: #fff;
  transition: all 0.75s;
  &.open {
    opacity: 1;
    transform: translateX(0px);
  }
  &.close {
    opacity: 0;
    transform: translateX(-350px);
  }
  .close {
    position: fixed;
    cursor: pointer;
    top: 7px;
    right: 7px;
    font-size: 28px;
  }
`
const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [sideOpen, setSideOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getLogoType = () => {
    if (width < 1201) {
      return 'mobilelogo.png';
    } else {
      return 'logo.png';
    }
  }
  return (
      <MainContainer>
        <NavContainer className={dropOpen ? 'open' : ''}>
          <SideBarButton onClick={() => { setSideOpen(!sideOpen) }}>
            {
              sideOpen === true
                ? <MdClose className="icon" />
                : <MdDehaze className="icon" />
            }
          </SideBarButton>
          <img className="logo" src={process.env.PUBLIC_URL + getLogoType()} alt="logo" />

          <NavItemBox onMouseEnter={() => { setDropOpen(true) }}>
            <NavItem><span>회사소개</span></NavItem>
            <NavItem><span>제품소개</span></NavItem>
            <NavItem><span>기술소개</span></NavItem>
            <NavItem><span>뉴스센터</span></NavItem>
            <NavItem><span>고객지원</span></NavItem>
          </NavItemBox>

          <LanguageBox>
            <img src="korea.png" alt="korea" />
            <MdKeyboardArrowDown className="icon" />
          </LanguageBox>
        </NavContainer>
        <DropdownBox className={dropOpen ? 'open' : 'close'} dp={dropOpen ? 'flex' : 'none'} onMouseLeave={() => { setDropOpen(false) }}>
          <DropItem>
            <div className="inner">CEO인사말</div>
            <div className="inner">회사연혁</div>
            <div className="inner">회사개요</div>
          </DropItem>
          <DropItem>
            <div className="inner">Brake System</div>
            <div className="inner">Coupler</div>
            <div className="inner">Door Control System</div>
          </DropItem>
          <DropItem>
            <div className="inner">연구개발</div>
            <div className="inner">연구실적(국책과제)</div>
            <div className="inner">연구소소개</div>
          </DropItem>
          <DropItem>
            <div className="inner">공지사항</div>
            <div className="inner">채용안내</div>
          </DropItem>
          <DropItem>
            <div className="inner">자주하는질문</div>
            <div className="inner">QnA</div>
            <div className="inner">사이트맵</div>
          </DropItem>

        </DropdownBox>
        <Overlay dp={sideOpen ? 'block' : 'none'} onClick={()=>{setSideOpen(false)}}/>
        <SideBar className={sideOpen ? 'open' : 'close'}>
          <MdClose className="close" onClick={()=>{setSideOpen(false)}}/>
        </SideBar>
      </MainContainer>

  )
};

export default Nav;