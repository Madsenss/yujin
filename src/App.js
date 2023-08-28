import { Outlet, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import GlobalStyle from "./components/globalstyle";
import Main from "./components/main";
import Footer from "./components/footer";
import CompanyContainer, { A, B, C } from "./components/companycontainer.js";
import History from "./components/history";
import Customer from "./components/customer";
import { useState } from "react";

function App() {
  const [wheel, setWheel] = useState('');
  const handleWheel = (e) => {
    if(e.deltaY > 0) {
      setWheel('down');
    } else {
      setWheel('up');
    }
  }
  
  return (
    <div className="App" onWheel={handleWheel}>
      <Routes>
        <Route path="/" element={<><GlobalStyle/><Nav wheel={wheel}/><Main/><Footer/></>}/>
        <Route path="*" element={<div>None</div>}/>
        <Route path="/company" element={<><GlobalStyle/><Nav wheel={wheel}/><CompanyContainer/><Footer/></>}>
          <Route path="0" element={<A/>}/>
          <Route path="1" element={<History/>}/>
          <Route path="2" element={<Customer/>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
