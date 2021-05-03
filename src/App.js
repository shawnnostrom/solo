import './App.css';
import { ToastContainer } from 'react-toastify';

import HomePage from './Home/index'

function App() {
  return (
    <div className="App">
      <HomePage />
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        autoClose={2000}
        newestOnTop={true}
        closeOnClick={false}
        draggable={false}
        rtl={false}
      />
    </div>
  );
}

export default App;
