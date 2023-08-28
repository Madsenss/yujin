import { styled } from "styled-components"
import Banner from "./banner";
import MainItem from "./mainitem";
import Product from "./products";
import Technology from "./technology";

const MainContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-image: url('test.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
`

const Main = () => {
  return (
    <MainContainer>
      <Banner/>
      <Product/>
      <Technology/>
      <MainItem/>
    </MainContainer>
  )
};

export default Main;