// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MyPosts from './components/Profile/MyPosts/MyPosts';


// <App />

const App = () => {
  return (
      <div className="App app-wrapper">
        <Header />
        <Navigation />
        <Profile />
        <MyPosts />
      </div>
  );
}


export default App;
