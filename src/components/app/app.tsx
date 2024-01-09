import Main from '../../pages/main/main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import Page404 from '../../pages/page404/page404';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps) : JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main offersCount={offersCount}/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/favourites' element={<Favorites/>}></Route>
        <Route path='/offer/:id' element={<Room/>}></Route>
        <Route path='*' element={<Page404/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
