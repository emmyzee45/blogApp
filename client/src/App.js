import TopBar from "./components/topbar/TopBar";
import Home from "./Pages/home/Home2";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
    <TopBar />
    <Routes>
      <Route exact path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/register" element={ user ? <Home /> :<Register />} />
      <Route path="/login" element={ user ? <Home /> :<Login />}>
      </Route>
      <Route path="/write" element={ user ? <Write /> :<Register />}>
      </Route>
      <Route path="/settings" element={ user ? <Settings /> :<Register />}>
      </Route>
      <Route path="/post/:postId" element={<Single />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
