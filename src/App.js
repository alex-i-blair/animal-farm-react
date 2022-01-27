import './App.css';
import Main from './Main/Main';
import { animals } from './animals';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header name='Alex Blair' />
      <Main animals={animals} />
      <Footer year='2022' />
    </div>
  );
}

export default App;
