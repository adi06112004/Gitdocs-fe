import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { WebRoutes } from "./routes/WebRoutes";
import Auth from "./pages/Auth/Auth";

const App = () => {
  return (
    <Routes>
      <Route path={WebRoutes.HOME()} element={<Home/>} />
      <Route path={WebRoutes.AUTH()} element={<Auth/>} />
    </Routes>
  )
}

export default App;