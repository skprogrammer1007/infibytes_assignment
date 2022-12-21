import Background from './components/Background';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import YourGames from './Pages/YourGames';
function App() {
  return (
    <BrowserRouter>
      <Background>
        <Routes>
          <Route path='' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path="/yourgames" element={<YourGames />} />
        </Routes>
      </Background>
    </BrowserRouter>
  );
}

export default App;
