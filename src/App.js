import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Map from './components/Map';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Map id="map"/>
      <Footer/>
    </>
  );
}

export default App;
