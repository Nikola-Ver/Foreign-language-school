import './App.css';
import NavBar from './components/navBar/navBar';
import News from './components/news/news';
import Registration from './components/registration/registration';
import Authorization from './components/authorization/authorization';
import Settings from './components/settings/settings';
import Profile from './components/profile/profile';
import Schedule from './components/schedule/schedule';
import Progress from './components/progress/progress';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Route path='/news' component={News} />
        <Route path='/registration' component={Registration} />
        <Route path='/authorization' component={Authorization} />
        <Route path='/settings' component={Settings} />
        <Route path='/profile' component={Profile} />
        <Route path='/schedule' component={Schedule} />
        <Route path='/progress' component={Progress} />
      </BrowserRouter>
    </div>
  );
}

export default App;
