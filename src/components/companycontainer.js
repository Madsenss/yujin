import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { css, keyframes, styled } from "styled-components";

const PageBox = styled.div`
  width: 100%;
  height: fit-content;
`
const TopBanner = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${process.env.PUBLIC_URL + '/test.jpg'});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .dark {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.5);
  }
  .title {
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
  }
  .subtitle {
    font-size: 18px;
    color: #fff;
    margin-bottom: 100px;
  }
`

const DetailNavBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const NavItem = styled.div`
  width: 100px;
  height: 50px;
  background-color: rgb(0, 75, 155);
  box-shadow: 0px 0px 4px 0.5px rgb(255, 255, 255, 0.3);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${props => props.active && css`
    background-color: white;
    color: black;
  `}

`
const init = [
  {id:0 , name: 'CEO인사말'},
  {id:1 , name: '회사연혁'},
  {id:2 , name: '회사개요'},
];
const A = styled.div`
  width: 100%;
  height: 500px;
`
const B = styled.div`
  width: 100%;
  height: 500px;
`
const C = styled.div`
  width: 100%;
  height: 500px;
`

const OutletBox = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #fff;
`

const PathBox = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid red;
`

export {A, B, C};
const CompanyContainer = () => {
  const navigate = useNavigate();
  const id = window.location.pathname.split('/').pop();

  return (
    <PageBox>
      <TopBanner>
        <div className="dark">
          <span className="title">회사소개</span>
          <span className="subtitle">Infinite Future In the Challenge of YUJIN</span>
          <DetailNavBox>
            {
              init.map((item, i)=>{
                return (
                  <NavItem active={id === i.toString()} className="" onClick={()=>{navigate('/company/'+ i)}}>{item.name}</NavItem>
                )
              })
            }
          </DetailNavBox>
        </div>  
      </TopBanner>   
      <OutletBox>
        <PathBox>
          <span className="t">1</span>
          <span className="t">1</span>
        </PathBox>
        <Outlet/>
      </OutletBox>
    </PageBox>
  )
};

export default CompanyContainer;