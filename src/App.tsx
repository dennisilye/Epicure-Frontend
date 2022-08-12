import React from "react";
import { MainHeader } from "./components/MainHeader";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Restaurants } from "./pages/Restaurants";
import { SmallFooter } from "./components/SmallFooter";
import { RestaurantDetails } from "./pages/RestaurantDetails";

function App() {  
  return (
    <main className="App">
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurant/:resId" element={<RestaurantDetails />} />
      </Routes>
      <SmallFooter />
    </main>
  );
}

export default App;
