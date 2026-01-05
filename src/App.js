import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCard from './components/Features/FeatureCard';
import Gallery from './components/Gallery';
import MenuCard from './components/Menu/MenuCard';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureCard />
      <MenuCard />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
