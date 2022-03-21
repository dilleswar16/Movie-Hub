import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import SimpleBottomNavigation from './Components/Navbar/BottomNavbar';
import Movies from './Pages/Movies';
import Search from './Pages/Search';
import Series from './Pages/Series';
import Trending from './Pages/Trending';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">

      <Container>
        <Routes>
          <Route path='/' element={<Trending />} exact/>
          <Route path='/movies' element={<Movies />}/>
          <Route path='/series' element={<Series />}/>
          <Route path='/search' element={<Search />}/>
        </Routes>
      </Container>
    </div>

    <SimpleBottomNavigation />
    
    </BrowserRouter>
  );
}

export default App;
