import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserState } from './contextes/UserContext';
import { PageState } from './contextes/PageContext';

import AuthorizationPage from './pages/authorization-page/authorization-page';
import MainPage from './pages/main-page/main-page';


function App() {
  return (
    <BrowserRouter>
     <UserState>
      <PageState>
        <Routes>
          <Route path='/' element={<AuthorizationPage/>}/>
          <Route path='/home' element={<MainPage/>}/>
        </Routes>
      </PageState>
     </UserState>
    </BrowserRouter> 
  )
}

export default App
