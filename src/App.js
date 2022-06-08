import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Nextpage from "./Nextpage";


function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<SignUp />}></Route>
            <Route path="/nextpage" element={<Nextpage />}></Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
