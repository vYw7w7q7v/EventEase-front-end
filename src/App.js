import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/main_page/MainPage';
import InfoPage from './pages/info_page/InfoPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="/info" element={<InfoPage />} />
        </Routes>
        {/*<Footer />*/}
      </div>
    </Router>
  );
}

export default App;
