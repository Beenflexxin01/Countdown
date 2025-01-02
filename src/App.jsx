import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './LandingPage';
import AllInfos from './AllInfos';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<LandingPage />} />
          <Route path="all-infos" element={<AllInfos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
