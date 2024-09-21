// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import MyRoutes from './myroutes/MyRoutes';
// import { Provider } from 'react-redux';

function App() {
return (
<>

  <BrowserRouter>
    <Header/>
     <MyRoutes/>
     <Footer/>
      {/* <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-12121212'
          data-ad-slot='12121212'
          data-ad-format='auto' /> */}
   </BrowserRouter>

</>
  );
}



export default App;