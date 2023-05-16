import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './styles/index.css';
import Home from './pages/Home';
import About from './pages/About';
import House from './pages/House';
import Error404 from './pages/Error404';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 100px;
  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

function App() {
  return (
    <Router>
      <Container>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/house/:id" element={<House />} />
          <Route path="*" element={<Error404 />} />
      </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}

export default App
