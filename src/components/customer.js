import React, { useRef, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const CustomerBox = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 0px 80px 0px;
  @media screen and (max-width: 800px) {
    padding: 50px 0px 50px 0px;
  }
`;

const marqueeLeft = keyframes`
  0% { transform: translateX(80%) }
  100% { transform: translateX(-100%) }
`;
const marqueeRight = keyframes`
  0% { transform: translateX(-80%) }
  100% { transform: translateX(100%) }
`;
const Track = styled.div`
  width: 80%;
  height: fit-content;
  overflow: hidden;
  margin: 10px 0px 20px 0px;
  padding: 20px 0px 20px 0px;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 5px 0px 10px 0px;
    padding: 10px 0px 10px 0px;
  }
`;
const TrackTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: rgb(0, 75, 155);
  filter: brightness(1.5);
  margin-bottom: 15px;
  margin-top: 50px;
`
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ ani }) => css`animation: ${ani === "left" ? marqueeLeft : marqueeRight} 60s linear infinite;`}
  @media screen and (max-width: 1200px) {
    ${({ ani }) => css`animation: ${ani === "left" ? marqueeLeft : marqueeRight} 40s linear infinite;`}
  }
  @media screen and (max-width: 1000px) {
    ${({ ani }) => css`animation: ${ani === "left" ? marqueeLeft : marqueeRight} 30s linear infinite;`}
  }
  @media screen and (max-width: 600px) {
    ${({ ani }) => css`animation: ${ani === "left" ? marqueeLeft : marqueeRight} 20s linear infinite;`}
  }
`;

const Image = styled.img`
  width: 150px;
  margin-right: 100px;
  border-radius: 6px;
  @media screen and (max-width: 800px) {
    width: 100px;
    margin-right: 50px;
  }
`;

const Title = styled.span`
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`
const SubTitle = styled.span`
  color: #fff;
  font-size: 16px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`
const Customer = () => {

  var kimg = Array.from({length: 16});
  var iimg = Array.from({length: 17});
  return (
    <CustomerBox>
      <Title>글로벌한 철도차량 부품 전문업체</Title>
      <SubTitle>국내외를 논하지 않는 다양한 고객사가</SubTitle>
      <SubTitle className='mb'>유진의 기술력과 경쟁력을 증명합니다</SubTitle>
      <TrackTitle>국내 고객사</TrackTitle>
      <Track>
        <ImageContainer ani="left">
          {
            kimg.map((item, i)=>{
              return (
                <Image src={process.env.PUBLIC_URL + '/cus/k/k' + i + '.jpg'} alt="img"/>
              )
            })
          }
        </ImageContainer>
      </Track>
      <TrackTitle>해외 고객사</TrackTitle>
      <Track>
        <ImageContainer ani="right">
          {
            iimg.map((item, i)=>{
              return (
                <Image src={process.env.PUBLIC_URL + '/cus/i/i' + i + '.jpg'} alt="img"/>
              )
            })
          }
        </ImageContainer>
      </Track>
    </CustomerBox>
  );
};

export default Customer;