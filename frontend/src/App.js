import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';
function App() {
  return (
  <BrowserRouter>
    <div className='d-flex flex-column site-container'>
      <header>
        <Navbar bg="dark" variant="dark">
            <LinkContainer to="/">
            <Navbar.Brand>sahara</Navbar.Brand>
             </LinkContainer>
        </Navbar>
        <Link to="/">sahara</Link>

      </header>
      <main>
        <Container>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        </Container>
      </main>
      <footer>
        <div className='text-center'> All rights resereved</div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
