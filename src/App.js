import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import "bootstrap/dist/js/bootstrap.js";
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />}>
        <Route path="/About" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/product" element={<ProductScreen />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
}

export default App;
