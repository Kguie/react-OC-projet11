import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import Lodging from "../../pages/lodging/Lodging";
import Error from "../../pages/error/Error";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/lodging/:id", element: <Lodging /> },
  { path: "*", element: <Error /> },
];
