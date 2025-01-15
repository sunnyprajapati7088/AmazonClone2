import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductHeader from "./components/ProductHeader";
import ProductGrid from "./components/ProductGrid";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import AddCartProducts from "./components/AddCartProducts";
import ProcuctsSectionPage from "./pages/ProcuctsSectionPage";

function App() {
  return (
    <div>
      <Navbar />
      <ProductHeader />
      <Carousel />
      <ProductGrid />
      <ProcuctsSectionPage />
      <AddCartProducts />
      <Footer />
    </div>
  );
}

export default App;
