import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Navbar from "./Component/Navbar";
import { Home, ContactUs, Explore, Services } from "./Component/Pages"; // Importing from index.js

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
