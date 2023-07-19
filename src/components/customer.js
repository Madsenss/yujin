import React, { useRef, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const CustomerBox = styled.div`
  width: 100%;
  height: 1000px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const marqueeLeft = keyframes`
  0% { transform: translateX(0) }
  100% { transform: translateX(-100%) }
`;
const marqueeRight = keyframes`
  0% { transform: translateX(0) }
  100% { transform: translateX(100%) }
`;
const Track = styled.div`
  width: 80%;
  height: 100px;
  border-radius: 5px;
  /* box-shadow: 0px 1px 4px 1px rgb(0, 0, 0, 0.2); */
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ ani }) => css`animation: ${ani === "left" ? marqueeLeft : marqueeRight} 20s linear infinite;`}
`;

const Image = styled.img`
  width: 150px;
  margin-right: 100px;
`;

const Customer = () => {

  var kimg = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  return (
    <CustomerBox>
      <Track>
        <ImageContainer ani="left">
          {
            kimg.map((item, i)=>{
              return (
                <Image src={'k' + i +'.jpg'} alt="img"/>
              )
            })
          }
        </ImageContainer>
      </Track>
      <Track>
        <ImageContainer ani="right">
          {
            kimg.map((item, i)=>{
              return (
                <Image src={'k' + i +'.jpg'} alt="img"/>
              )
            })
          }
        </ImageContainer>
      </Track>
    </CustomerBox>
  );
};

export default Customer;