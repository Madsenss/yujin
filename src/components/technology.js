import { styled } from "styled-components";

const TechBox = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 50px 0px 50px;
  .title {
    margin: 50px 0px 50px 0px;
    font-size: 26px;
    font-weight: bold;
    font-family: 'NanumBarunGothicBold';
    color: rgb(0, 75, 155);
  }
  .itemouter {
    width: 100%;
    height: 100%;
    max-width: 1800px;
  }
  @media screen and (max-width: 1200px) {
    padding: 0px 15px 0px 15px;
  }
`
const Item = styled.div`
  cursor: pointer;
  display: inline-flex;
  width: 50%;
  height: 350px;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 0.3s;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  &:hover {
    opacity: 0.7;
  }
  align-items: center;
  justify-content: center;
  .dark {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 0, 0, 0.5);
  }
  .name {
    width: 55%;
    height: fit-content;
    font-size: 24px;
    color: #fff;
    border-top: 1.5px solid #fff;
    border-bottom: 1.5px solid #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px 0px 30px 0px;
    @media screen and (max-width: 800px) {
      flex-direction: column;
      .nb {
        display: none;
      }
    }
  }
`
const Technology = () => {
  return (
    <TechBox>
      <div className="title">TECHNOLOGY</div>
      <div className="itemouter">
        <Item className="mb" bg="te2.jpg">
          <div className="dark">
            <div className="name">
              <span>TECHNICAL</span>
              <span className="nb">&nbsp;</span>
              <span>STATUS</span>
            </div>
          </div>
        </Item>
        <Item bg="te1.jpg">
          <div className="dark">
            <div className="name">
              <span>EQUIPMENT</span>
              <span className="nb">&nbsp;</span>
              <span>STATUS</span>
            </div>
          </div>
        </Item>
      </div>

    </TechBox>
  )
};

export default Technology;