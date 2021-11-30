import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import FridgeComponent from './components/FridgeComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <FridgeComponent />
      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
