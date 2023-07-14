import { styled } from "styled-components"

const MainContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-image: url('bg_index1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`
const Test = styled.div`
  width: 100%;
  height: 2000px;
`
const Main = () => {
  return (
    <MainContainer>
      <Test>1</Test>
    </MainContainer>
  )
};

export default Main;