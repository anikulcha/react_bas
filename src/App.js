// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";


// <App />

const App = () => {
  return (
    <Router>
      <div className="App app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          
          <Routes>
            <Route path="/profile" element={<Profile />} />

            <Route path='/dialogs/*' element={<Dialogs />} />

            <Route path='/news' element={<News />}/>
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings/>} />
          </Routes>
          
        </div>
      </div>
     </Router>
  );
}


export default App;
