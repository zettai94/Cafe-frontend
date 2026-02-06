import Navbar from '../components/common/Navbar';
import Hero from '../components/landing/Hero';
import FeatureCard from '../components/landing/Features/FeatureCard';
import MenuCard from '../components/landing/Menu/MenuCard';
import Gallery from '../components/landing/Gallery';
import Contact from '../components/landing/Contact';
import Footer from '../components/common/Footer';

const LandingPage = () => (
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
export default LandingPage;