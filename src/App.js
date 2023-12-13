import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar';
import PageContainers from './containers/PageContainers';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div >
      {/*PageContainers sarmaladık sayfanın 12/10'luk alanını kapladı*/}
      <PageContainers>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </PageContainers>

    </div>
  );
}

export default App;
