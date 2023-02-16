import './App.css';
import Data from './components/Data';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Data />
      <Footer />
    </div>
  );
}

export default App;
