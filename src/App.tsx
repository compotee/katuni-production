import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthorizationPage from './pages/authorization-page/authorization-page';
import MainPage from './pages/main-page/main-page';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthorizationPage/>}/>
        <Route path='/home' element={<MainPage/>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
