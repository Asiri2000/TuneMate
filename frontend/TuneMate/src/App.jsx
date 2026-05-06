import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
