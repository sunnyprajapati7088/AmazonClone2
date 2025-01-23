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
import ShoppingCart from "./components/ShoppingCart";
import { Route, Router, Routes } from "react-router-dom";
import SignInForm from "./components/SignInForm";
import Register from "./components/Register";
import Profile from "./components/Profile";


function Home({ isSidebar, setIsSideBar }) {
  return (
    <div onClick={()=>setIsSideBar(false)}>
      <ProductHeader isSidebar={isSidebar} setIsSideBar={setIsSideBar} />
      <Carousel />
      <ProductGrid />
      <ProcuctsSectionPage />
      <AddCartProducts />
    </div>
  );
}

function App() {
  const [isSidebar, setIsSideBar] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home isSidebar={isSidebar} setIsSideBar={setIsSideBar} />}/>
          <Route
            path="/cart"
            element={<ShoppingCart className="bg-slate-200" />}
          />
        </Route>
        <Route path="/sign" element={<SignInForm />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
