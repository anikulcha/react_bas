// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Navigation from './components/Navigation';


// <App />

const App = () => {
  return (
      <div className="App app-wrapper">
        <Header />
        <Navigation />
        <Profile />
      </div>
  );
}







export default App;
