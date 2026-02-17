import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { WebRoutes } from "./routes/WebRoutes";
import Auth from "./pages/Auth/Auth";
import SignIn from "./pages/Auth/SignIn";
import CreateAccount from "./pages/Auth/CreateAccount";

const App = () => {
  return (
    <Routes>
      <Route path={WebRoutes.HOME()} element={<Home />} />

      {/* 👇 NESTED ROUTES ADDED HERE */}
      <Route path={WebRoutes.AUTH()} element={<Auth />}>
        <Route index element={<SignIn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<CreateAccount />} />
      </Route>
    </Routes>
  );
};

export default App;
