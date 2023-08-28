import { keyframes, styled } from "styled-components";

const HistoryBox = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #222;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
  @media screen and (max-width: 800px) {
    padding: 50px 0px 50px 0px;
  }
`
const Title = styled.span`
  font-size: 34px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  &.mb {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`
const SubTitle = styled.span`
  font-size: 16px;
  color: #fff;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`
const TimelineBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding-left: 80px;
  position: relative;
  @media screen and (max-width: 600px) {
    padding-left: 30px;
  }
`
const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgb(0, 75, 155);
  background-color: #fff;
  box-shadow: 0px 0px 4px 1px rgb(255, 255, 255, 0.9);
  @media screen and (max-width: 600px) {
    width: 8px;
    height: 8px;
    box-shadow: 0px 0px 4px 1px rgb(255, 255, 255, 0.9);
  }
`
const fadeIn = keyframes`
  0% { opacity: 0 }
  50% { opacity: 0 }
  100% { opacity: 1;}
`
const TLItem = styled.div`
  z-index: 2;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  animation: ${fadeIn} ${props => props.s}s linear;
  .year {
    font-size: 24px;
    font-weight: bold;
    margin: 0px 10px 0px 30px;
    color: #999;
  }
  .text {
    /* font-weight: bold; */
    font-size: 12px;
    color: #fff;
  }
  .inner {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 600px) {
    .year {
      font-size: 18px;
      margin: 0px 5px 0px 10px;
    }
    .text {
      font-size: 10px;
    }
  }
`
const bar = keyframes`
  0% { height: 0% }
  12% { height: 0% }
  100% { height: 100% }
`
const Progress = styled.div`
  z-index: 1;
  width: 4px;
  height: 95%;
  border-radius: 5px;
  overflow:hidden;
  background-color: #999;
  position: absolute;
  top: 8px;
  left: 84px;
  &::after {
    content:'';
    position:absolute;
    top:0;
    left:0;
    height: 0;
    width:5px;
    background-color: rgb(0, 75, 155);
    animation: ${bar} 2.5s linear forwards;
  }
  @media screen and (max-width: 600px) {
    left: 32.5px;
    width: 2px;
  }
`
const History = () => {
  const tldata = [
    {s: 1, year: 1972, text: ['유진기공산업㈜ 창립(43주년 10/28)']},
    {s: 1, year: 1980, text: ['철도차량 공기제동장치 개발']},
    {s: 1, year: 1985, text: ['기업부설연구소인정 (과학기술처 제565호)', '유망중소기업지정 (중소기업진흥 85-653호)']},
    {s: 1, year: 1988, text: ['산업포장수상(대통령 2062호)']},
    {s: 1, year: 1994, text: ['유진전기공업 주식회사 설립']},
    {s: 1, year: 1996, text: ['한국형 고속전철 개발사업 제동시스템 주관 기업 선정']},
    {s: 1, year: 1998, text: ['한국 표준전동차 개발사업 제동시스템 주관 기업 선정']},
    {s: 2, year: 1999, text: ['한국 표준 경전절 개발사업 제동시스템 주관 기업 선정']},
    {s: 2, year: 2000, text: ['유진차량주식회사 설립', '철도차량용 스크루 에어엔드 독자 개발']},
    {s: 2, year: 2002, text: ['철도청 틸팅전동차 제동시스템 개발 및 공급업체 지정']},
    {s: 2, year: 2003, text: ['산업용 컴프레서 사업부 설립']},
    {s: 2, year: 2005, text: ['제일차량 주식회사 설립']},
    {s: 2, year: 2006, text: ['호남/전라선 고속전철 제동장치 공급', '브라질 센트랄 전동차 제동시스템 유진브랜드 최초 수출 완료']},
    {s: 2, year: 2007, text: ['자본재산업 개발유공자 은탑산업훈장 수훈']},
    {s: 3, year: 2008, text: ['소주유진 중국 법인 설립', '제2공장 설립(산업용 컴프레서 사업부)']},
    {s: 3, year: 2010, text: ['1공장 증축(공장 및 사무실)']},
    {s: 3, year: 2011, text: ['SIL4 인증(Brake Control System YB)']},
    {s: 3, year: 2012, text: ['녹색기술 인증(국토해양부)']},
    {s: 3, year: 2014, text: ['유진브라질(YUJIN DO BRAZIL RAILWAY EQUIPMENT LTDA) 설립', '김정자 회장 금탑산업훈장 수훈', 'IRIS(International Railway Industry Standard, 국제철도산업표준) 인증']},
    {s: 3, year: 2016, text: ['터키 JSC(Frensan A.S.) 설립']},
    {s: 3, year: 2017, text: ['ISO14001 인증', '고속전철 EMU 250/300 130량의 제동 및 연결기 계약', '유럽차량사인 CAF와 에콰도르 키토 108량 제동시스템 계약']},
  ]

  return (
    <HistoryBox>
      <Title>유진의 끊임없는 도전은</Title>
      <Title className="mb">무한한 미래를 만들고 있습니다</Title>
      <SubTitle>끊임없는 연구개발을 통한 기술혁신으로</SubTitle>
      <SubTitle>변화하는 환경과 기술력 향상에 앞서 대응하며</SubTitle>
      <SubTitle>한국을 넘어서 세계 일류의 기업으로 거듭날 것입니다.</SubTitle>
      <TimelineBox>
        <Progress/>
        {
          tldata.map((item, i)=>{
            return (
              <TLItem s={parseInt(item.s)}>
                <Circle/>
                <span className="year">{item.year}</span>
                <div className="inner">
                  {
                    item.text.map((item2, i)=>{
                      return (
                        <span className="text">{item2}</span>
                      )
                    })
                  }
                </div>
              </TLItem>
            )
          })
        }
      </TimelineBox>
    </HistoryBox>
  )
};

export default History;