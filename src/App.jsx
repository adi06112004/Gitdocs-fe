import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { WebRoutes } from "./routes/WebRoutes";
import Auth from "./pages/Auth/Auth";
import Navbar from "./components/Navbar";
import SignIn from "./pages/Auth/SignIn";
import CreateAccount from "./pages/Auth/CreateAccount";

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path={WebRoutes.HOME()} element={<Home/>} />
      <Route path={WebRoutes.AUTH()} element={<Auth/>} />
      <Route path={WebRoutes.SIGNIN()} element={<SignIn/>} />
      <Route path={WebRoutes.CREATEACCOUNT()} element={<CreateAccount/>} />
    </Routes>
    </>
  )
}

export default App;