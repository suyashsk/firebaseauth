import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import SignIn from "./Components/SignIn";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
      </Routes>
    </>
  );
}

export default App;