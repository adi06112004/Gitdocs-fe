import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { WebRoutes } from "./routes/WebRoutes";
import Auth from "./pages/Auth/Auth";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path={WebRoutes.HOME()} element={<Home/>} />
      <Route path={WebRoutes.AUTH()} element={<Auth/>} />
    </Routes>
    </>
  )
}

export default App;