import { Routes, Route} from 'react-router-dom';

import HomeComponent from './Home/HomeComponent';
import ContentComponent from './content/ContentComponent';
import LoginComponent from './auth/login/LoginComponent';
import RegisterComponent from './auth/register/RegisterComponent';
import NotFoundPage from './NotFound/NotFoundPage';

import Layout from './content/Layout/Layout'

export default function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/register' element={<RegisterComponent />} />
          <Route element={<Layout />}>
            <Route 
                path="/tambuli-alert/*" 
                element={<ContentComponent /> } />
          </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
