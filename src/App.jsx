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

const App = (props) => {
  // console.log(props.state.userInfo)
  return (
    <Router>
      <div className="App app-wrapper">
        <Header />
        <Navigation userInfo={props.state.userInfo} id={props.state.userID}/>
        <div className="app-wrapper-content">
          
          <Routes>
            <Route path="/profile" 
                   element={
                    <Profile posts={props.state.profilePage.posts} 
                             newPost={props.state.profilePage.newPostText}
                             profileImage={props.state.profilePage.profileImage} 
                             profileBackgroundPhoto={props.state.profilePage.profileBackgroundPhoto}
                             dispatch={props.dispatch} />
                    } />

            <Route path='/dialogs/*' 
                   element={<Dialogs store={props.store} />} />

            <Route path='/news' element={<News />}/>
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
     </Router>
  );
}




export default App;
