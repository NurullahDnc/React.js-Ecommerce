import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar';
import PageContainers from './containers/PageContainers';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false); 
    }, 1000); 
  }, []);

  return (
    <div >
    {/*sayfa yuklenirken calısıyor */}

       <div className='  bg-slate-300 '>
        {loading ? (
          <p  className='absolute w-[100%] h-[100%] flex justify-center items-center  text-[2rem] z-10'   >YUKLENİYOR...</p>
        ) : (
          ""
        )}
      </div>
   
      {/*PageContainers sarmaladık sayfanın 12/10'luk alanını kapladı*/}

      <PageContainers>
        <Router>
          <Navbar />
          <Routes>
            
            <Route path='/' element={<Home />} />
            {/*product'ta onclick yazdık tıklandıgında, id url atıyor dinamik olarak, id gore yonlendirme yapıyor? */}
            <Route path='/products/:id' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />


          </Routes>

          <Footer />
        </Router>
      </PageContainers>

    </div>
  );
}

export default App;
