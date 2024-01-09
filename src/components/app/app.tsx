import Main from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../../pages/login/login';
import Page404 from '../../pages/page404/page404';
import {AuthorizationStatus, AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps) : JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={AppRoute.Root} element={<Main offersCount={offersCount}/>}></Route>
        <Route path={AppRoute.Login} element={<Login/>}></Route>
        <Route path={AppRoute.Favourites} element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <Favorites/>
          </PrivateRoute>
        }
        />
        <Route path={`${AppRoute.Room}/:id`} element={<Room/>}></Route>
        <Route path='*' element={<Page404/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
