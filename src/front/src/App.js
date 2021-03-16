import './App.css';
import NavBar from './components/navBar/navBar';
import News from './components/news/news';
import Registration from './components/registration/registration';
import Authorization from './components/authorization/authorization';

function App() {
  return (
    <div className="App">
      <NavBar />
      <News />
    </div>
  );
}

export default App;
