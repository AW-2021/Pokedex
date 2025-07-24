import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CardGamePage from "./pages/CardGamePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path='/cardgame' element={<CardGamePage />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
