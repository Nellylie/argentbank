
import './style/main.scss';
import RoutesSection from './routessection/RoutesSection';
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import { tokenKey } from './reduxcode/login/actionRedux'
import { profilUser } from './reduxcode/profil/profilDispatch';

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
      if (localStorage.getItem("remember")){
      const userToken = localStorage.getItem("user");
      if (userToken) {
          const { token } = JSON.parse(userToken);
          dispatch(tokenKey(token));
          dispatch(profilUser(token));
      }
  }
  }, [dispatch]);

  
  return (
    <RoutesSection/>
  );
}

export default App;
