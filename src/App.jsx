import './App.css'
import Login from './assets/components/login/login.jsx'; 
import Welcome from './assets/components/welcome/welcome.jsx'; 

function App() {
  return (
    <div className="container">
      <div className="welcome-container"><Welcome /></div>
      <div className="auth-container"><Login /></div>
    </div>
  );
}

export default App;
