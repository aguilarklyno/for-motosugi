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
            <Route path="/service" element={<Service />} />
            <Route path="/cashless" element={<Cashless />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/colum" element={<Colum />} />
            <Route path="/news" element={<News />} />
            <Route path="/faq" element={<FAQ />} />
            </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
