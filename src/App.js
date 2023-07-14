import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import GlobalStyle from "./components/globalstyle";
import Main from "./components/main";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><GlobalStyle/><Nav/><Main/></>}/>
        <Route path="*" element={<div>None</div>}/>
      </Routes>
    </div>
  );
}

export default App;
