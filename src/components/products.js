import { MdArrowRightAlt, MdKeyboardArrowRight, MdVisibility } from "react-icons/md";
import { styled } from "styled-components";

const ProductBox = styled.div`
  border-top: 4px solid #eee;
  width: 100%;
  height: fit-content;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .title {
    margin: 50px 0px 50px 0px;
    font-size: 26px;
    font-weight: bold;
    font-family: 'NanumBarunGothicBold';
    color: rgb(0, 75, 155);
  }
  .itemouter {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1200px) {
    padding: 30px 15px 50px 15px;
    .itemouter {
      flex-direction: column;
    }
  }
`
const Item = styled.div`
  background-image: url(${props => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 280px;
  height: 350px;
  overflow: hidden;
  position: relative;
  border-radius: 6px;
  box-shadow: 0px 1px 4px 0px rgb(0, 0, 0, 0.2);
  margin: 0px 10px 0px 10px;
  cursor: pointer;
  .category {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 75, 155);
    padding: 7px 0px 7px 0px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    position: absolute;
    top: 0;
  }
  .hide {
    transform: translateY(100%);
    transition: all 0.4s;
  }
  &:hover {
    .hide {
      transform: translateY(0%);
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 800px) {

  }
`
const ItemShow = styled.div`
  width: 100%;
  height: fit-content;
  padding: 7px 0px 7px 0px;
  background-color: rgb(0, 0, 0, 0.3);
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .showtext {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
`
const Detail = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  
`
const a = [
  { id:0, category: 'Brake System'},
  { id:1, category: 'Coupler'},
  { id:2, category: 'Driving Gear'},
  { id:3, category: 'Pantograph'},
  { id:4, category: 'Door Control System'}
]

const Product = () => {
  return (
    <ProductBox>
      <span className="title">PRODUCTS</span>
      <div className="itemouter">
        {
          a.map((item, i)=>{
            return (
              <Item bg={process.env.PUBLIC_URL + '/p' + i + '.jpg'}>
                <ItemShow className="hide">
                  <span className="showtext">View</span>
                </ItemShow>
                <div className="category">{item.category}</div>
              </Item>
            )
          })
        }
      </div>
    </ProductBox>
  )
};

export default Product;