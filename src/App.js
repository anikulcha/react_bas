// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TestComponent from './components/Test';


// <App />

const App = () => {
  return (
      <div className="App app-wrapper">
        <Header />
        <Navigation />
        <Profile />
        <TestComponent />
      </div>
  );
}







export default App;
