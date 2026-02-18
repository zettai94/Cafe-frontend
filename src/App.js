import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderingPage from './pages/ordering/OrderingPage';
import LandingPage from './pages/landing/LandingPage';


function App() {
  useEffect(() => {
    const wakingBackend = async() => {
      try{
        const apiURL = process.env.REACT_APP_API_URL;
        console.log("Pinging backend to wake up...");
        await fetch(`${apiURL}/api/products`);
        console.log("Backend is alive!");
      }catch (e)
      {
        console.log("Backend still loading...")
      }
    };

    wakingBackend();
  }, [])

  return (
    <Router>
      <Routes>
        {/*  Landing Page Route */}
        <Route path="/" element={<LandingPage />} />
        {/*  Ordering Page Route */}
        <Route path="/order" element={<OrderingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
