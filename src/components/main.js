import { styled } from "styled-components"
import History from "./history";
import Customer from "./customer";

const MainContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-image: url('bg_index1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`
const A = styled.div`
  width: 100%;
  height: 100px;
  /* border: 2px solid red; */
`
const Main = () => {
  return (
    <MainContainer>
      <A/>
      <History/>
      <Customer/>
    </MainContainer>
  )
};

export default Main;