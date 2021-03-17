import './App.css';
import NavBar from './components/navBar/navBar';
import News from './components/news/news';
import Registration from './components/registration/registration';
import Authorization from './components/authorization/authorization';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <BrowserRouter>
        <Route path='/news' component={News} />
        <Route path='/registration' component={Registration} />
        <Route path='/authorization' component={Authorization} />
      </BrowserRouter>
    </div>
  );
}

export default App;
