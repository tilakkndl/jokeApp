import { SnackbarProvider } from 'notistack';

import './App.css';
import Login from './pages/login/login';
import Register from './pages/register/register';

function App() {

  return (
    <SnackbarProvider>
      <>
  <Register/>
  {/* <Login/> */}
  {/* <UseSnackBar/> */}

  </>
  </SnackbarProvider>

  );
}

export default App;
