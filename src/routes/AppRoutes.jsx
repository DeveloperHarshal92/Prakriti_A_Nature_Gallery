import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Book from "../pages/Book";
import NotFound from "../components/common/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/book" element={<Book />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
