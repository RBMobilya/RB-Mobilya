// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import Routes from './myroutes/Routes';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
// import { Provider } from 'react-redux';

function App() {
return (
<>

  <BrowserRouter>
    <Header/>
     <Routes/>
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