import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';

import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';

// "npm i redux react-redux"
function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuth && (
        <Auth />
      )}
      {isAuth && (
        <UserProfile />
      )}
      <Counter />
    </>
  );
}

export default App;
