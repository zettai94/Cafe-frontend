import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCard from './components/Features/FeatureCard';
import Gallery from './components/Gallery';
import MenuCard from './components/Menu/MenuCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderingPage from './components/OrderingPage';


function App() {
  return (
    <Router>
      <Routes>
        {/*  Landing Page Route */}
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <FeatureCard />
            <MenuCard />
            <Gallery />
            <Contact />
            <Footer />
          </>
        } />

        {/*  Ordering Page Route */}
        <Route path="/order" element={<OrderingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
