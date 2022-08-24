
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Table from  './components/Table';
import Form from  './components/Form';
import ScrollToTop from 'react-scroll-to-top';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  return (
    <>

    <Header/>
     <main className="main-container">

      <Routes>
      <Route path="/" element={<Table/>}/>
      <Route path="/formulario" element={<Form/>}/>
      </Routes>

     </main>
     <Footer/>
     <ScrollToTop style={{ right: '8px'}}
        smooth
        viewBox="0 0 24 24"
        component={<ArrowUpwardIcon />}
      />
    </>
  );
}

export default App;
