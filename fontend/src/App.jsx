import "./App.css";
import Registration from "./pages/registration";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
// import page
import LoginPage from "./pages/login";
import Home from "./pages/Home";
import NotLoggedInUser from "./pages/privateRouter/NotLoggedInUser";
import LoggedInUser from "./pages/privateRouter/LoggedInUser";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<NotLoggedInUser />}>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Route>
      <Route element={<LoggedInUser />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
