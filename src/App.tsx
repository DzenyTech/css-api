import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/hero/Home';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Home />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
