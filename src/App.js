import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/common/header.js'
import Footer from './components/common/footer.js'
import Baner from './components/home/baner.js'
import Explorourproducte from './components/home/explorourproducte.js'
import Kidslateest from './components/home/kidslateest.js'
import Socialmedia from './components/home/socialmedia.js';
import WomenLatest from './components/home/womenLatest.js';
import Menlatest from './components/home/menlatest.js';
import Women from './components/pages/women.js';
import About from './components/pages/about.js';
import Contact from './components/pages/contact.js';
import Kids from './components/pages/kids.js';
import Men from './components/pages/men.js';


function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />} path="/">
            <Route element={<Baner />} path="/Baner" />
            <Route element={<Explorourproducte />} path="/Explorourproducte" />
            <Route element={<Kidslateest />} path="/Kidslateest" />
            <Route element={<Socialmedia />} path="/Socialmedia" />
            <Route element={<WomenLatest />} path="/WomenLatest" />
            <Route element={<Menlatest />} path="/Menlatest" />
            <Route element={<Women />} path="/Women" />
            <Route element={<About />} path="/About" />
            <Route element={<Contact />} path="/Contact" />
            <Route element={<Kids />} path="/Kids" />
            <Route element={<Men />} path="/Men" />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
   </>
  );
}

export default App;
