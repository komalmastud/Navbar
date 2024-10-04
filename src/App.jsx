import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Navbar from "./Component/Navbar";
import { ContactUs, Explore, Services } from "./Component/Pages"; // Importing from index.js
import Home from "./Component/Home";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
