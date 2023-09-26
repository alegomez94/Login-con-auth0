import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/Logout';
import Profile from './components/Profile';

function App() {

 

  return (
    <div className="App">
      <h1>Registrarse</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
     </div>
  );
}

export default App;
