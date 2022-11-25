import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/01-Home/Home';
import Service from './components/02-Service/Service';
import Cashless from './components/03-Cashless/Cashless';
import Custom from './components/04-Custom/Custom';
import Plan from './components/05-Plan/Plan';
import Colum from './components/07-Colum/Colum';
import News from './components/08-News/News';
import FAQ from './components/09-FAQ/FAQ';


function App() {

  return ( 
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Service />} />
            <Route path="/" element={<Cashless />} />
            <Route path="/" element={<Custom />} />
            <Route path="/" element={<Plan />} />
            <Route path="/" element={<Colum />} />
            <Route path="/" element={<News />} />
            <Route path="/" element={<FAQ />} />
            </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
