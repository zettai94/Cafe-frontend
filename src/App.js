import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderingPage from './pages/OrderingPage';
import LandingPage from './pages/LandingPage';


function App() {
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
